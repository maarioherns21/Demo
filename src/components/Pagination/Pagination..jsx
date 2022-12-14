


export default function Pagination({ totalMovies, moviesPerPage, setCurrentPage }) {
let pages = [];
for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
  pages.push(i);
}

return (
  <div>
    {pages.map((page, index) => (
      <button key={index} onClick={() =>  setCurrentPage(page)}>{page}</button>
    ))}
  </div>
)

}