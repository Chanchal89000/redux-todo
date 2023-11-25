import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../features/quote/quoteSlice'

const QuoteComponent = () => {

    const dispatch = useDispatch()

   const {quoteData , isLoading , isError} =  useSelector((state) => state.quotes)

   useEffect(()=>{
      dispatch(fetchQuote())
   },[])



   if(isError){
    return(
        <marquee behavior="" direction="">
        <h1>Something Went Wrong.......</h1>
    </marquee>
    )
   }

   if(!quoteData || isLoading){
    return(
        <marquee behavior="" direction="">
        <h1>Loading............</h1>
    </marquee>
    )
   }



  return (
    <marquee id='mar-tag'>

        <h1 id='mar-head'>{quoteData.content} - {quoteData.author}</h1>

    </marquee>
  )
}

export default QuoteComponent