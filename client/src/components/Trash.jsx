import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";

export default function Trash() {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);

  async function getTrash() {
    try {
      const { data } = await axios.get(`http://localhost:3000/trash`);
      setArticles(data.data);
      setPagination(data.totalPage);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
      });
    }
  }

  async function deleteArticle(id) {
    try {
      await axios.delete(`http://localhost:3000/article/${id}`);
      getTrash();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getTrash();
  }, [page]);
  return (
    <>
      <div className="rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => {
                const { id, title, category } = article;
                return (
                  <tr key={index} className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {title}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {category}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <button
                        onClick={() => deleteArticle(id)}
                        className="btn btn-warning"
                      >
                        <MdDeleteOutline className="me-1" />
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
          {[...Array(pagination)].map((x, i) => (
            <button
              className="join-item btn"
              onClick={() => setPage(i + 1)}
              key={i}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
