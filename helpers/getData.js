// Shout out naar Maikel & Chelsea voor het helpen
// const getResultsFromSearchData = (searchData) => {
//     return searchData.aquabrowser
//         && searchData.aquabrowser.results
//         && searchData.aquabrowser.results
//         && searchData.aquabrowser.results.result
//         || []
// }

const getTitleFromResult = (result) => {
    return result.titles
        && result.titles
        && result.titles.title
        && result.titles.title
        && result.titles.title.$t
        || undefined
}

const getAuthorFromResult = (result) => {
    return result.authors
        && result.authors
        && result.authors["main-author"]
        && result.authors["main-author"]
        && result.authors["main-author"].$t
        || undefined
}

const getPublicationYearFromResult = (result) => {
    return result.publication
        && result.publication
        && result.publication.year
        && result.publication.year
        && result.publication.year.$t
        || undefined
}

const getPublisherFromResult = (result) => {
    return result.publication
        && result.publication
        && result.publication.publishers
        && result.publication.publishers.publisher
        && result.publication.publishers.publisher.$t
        || undefined
}

const getTransformedResultFromResults = (results) => {
    return results
        ? results.map(result => {
            return {
                title: getTitleFromResult(result),
                author: getAuthorFromResult(result),
                publicationYear: getPublicationYearFromResult(result),
                publisher: getPublisherFromResult(result)
                || undefined
            }
        })
        : []
}

module.exports = {
  getTransformedResultFromResults,
  getPublicationYearFromResult
}
