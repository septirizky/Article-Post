import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Preview() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [status, setStatus] = useState();

  const { id } = useParams();

  async function getPreview() {
    const data = await axios.get(`http://localhost:3000/article/${id}`);
    setTitle(data.data.articles.title);
    setContent(data.data.articles.content);
    setCategory(data.data.articles.category);
    setStatus(data.data.articles.status);
  }

  useEffect(() => {
    getPreview();
  }, []);

  return (
    <>
      <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {title}
            </h3>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-pretty text-sm text-gray-500">{content}</p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">{status}</dt>
            <dd className="text-xs text-gray-500">{category}</dd>
          </div>
        </dl>
      </div>
    </>
  );
}
