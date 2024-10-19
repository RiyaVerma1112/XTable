// import table from "./table";
import React , {useState} from "react" ;

function App() {

  const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]

  // const [new]
  const [newData , setData] = useState(data) ;

  const handleSortDate = () => {
    const sortedDateData = [...newData].sort((a , b) => {
      if(new DataTransfer(b.date) != new Date(a.date)) {
        return new Date(b.date) - new Date(a.date) ;
      }else {
        return b.views - a.views ;
      }
    })
    setData(sortedDateData) ;
  }

  const handleSortViews = () => {
    // const sortedData = [...data] creates a shallow copy of the data array.
    // This is important because in React, state should be immutable. 
    // You should not modify the original state directly. 
    // Instead, you create a copy, modify that, and then set the new state using setData.
    const sortedViewsData = [...newData].sort((a , b) => {
      if(b.views !== a.views) return b.views - a.views ;
      return new Date(b.date) - new Date(a.date) ;
    }) ;
    setData(sortedViewsData) ;
  }

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleSortDate}>Sort by Date</button>
      <button onClick={handleSortViews}>Sort by Views</button>

      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>

        {newData.map((val , key) => {
          return (
            <tr key={key}>
              <td>{val.date}</td>
              <td>{val.views}</td>
              <td>{val.article}</td>
            </tr>
          )
        })}

      </table>
    </div>
  );
}

export default App;
