import { useState, useEffect } from 'react'


export default function Years({ technology, yearResult }: { technology: Object, yearResult: Function }) {

  const [totalYears, setTotalYears] = useState(0)

  var arr = Object.values(technology)
  
  useEffect(() => {
    function getYearRange(arr: any[]){

      // get lowest year from arr
      var lowestYear = arr.reduce((a, b) => a.time.startYear < b.time.startYear ? a : b);
      
  
      // get highest year from arr. If 'present' is used, use current year
      var highestYear = arr.reduce((a, b) => a.time.endYear > b.time.endYear ? a : b);
      if (highestYear.time.endYear === 'present') {
        highestYear = new Date().getFullYear()
      } else {
        highestYear = highestYear.time.endYear
      }
      
      setTotalYears(highestYear - lowestYear.time.startYear)
      yearResult(totalYears)
  
    }
    getYearRange(arr)
  }, [totalYears])


  
  

  return (
    <>
      <h2>Details</h2>
      <ul>
        {arr.map((item:any, index) => (
          <li key={index}>
            <p>{item.name}: {item.time.startYear}-{item.time.endYear}</p>
          </li>
        ))}
      </ul>
    </>
  )
}