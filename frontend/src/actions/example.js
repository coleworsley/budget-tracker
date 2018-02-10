// Sample Code


export const quotesLoading = (loading) => {
  return {
    type: 'QUOTES_LOADING',
    loading,
  }
}

export const quoteError = (error) => {
  return {
    type: 'QUOTE_ERROR',
    error,
  }
}

export const quotes = (data) => {
  return {
    type: 'QUOTE',
    data,
  }
}

export const fetchQuotes = (symbols) => {
  return (dispatch) => {
    dispatch(quotesLoading(true));

    fetch(`/api/v1/quotes?symbols=${symbols}`)
      .then((res) => {
        dispatch(quotesLoading(false))
        return res.json();
      })
      .then((data) => {
        return dispatch(quotes(data));
      })
      .catch((error) => {
        return dispatch(quoteError(error))
      })
  }
}
