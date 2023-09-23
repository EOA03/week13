import { useEffect, useState } from 'react';
import { Button, Spin } from 'antd'; // Tambahan untuk Spinner
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { CategoryList as CategoryListComponent } from '../../components';
import { CategoryList as ListType } from '../../types';

const ListCategory: React.FC = () => {
  const [categories, setCategories] = useState<ListType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const getCategory = async () => {
    try {
      const response = await fetch(`${apiUrl}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setCategories(data.data);
      } else {
        throw new Error('Failed to fetch Category');
      }
    } catch (error) {
      console.error("ERROR:", error);
      alert("Failed to fetch Category");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return;
    }
    getCategory();
  }, []);

  const removeCategory = async (id: string) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      
      if (response.ok) {
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== id)
        );
      } else {
        throw new Error('Failed to remove category');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to remove category');
    }
  };

  const columns: ColumnsType<ListType> = [];

  return (
    <>
      <div>
        <div>
          <Button type={'primary'} onClick={() => navigate('/add')}>
            Create New
          </Button>
          <h3>List of Category</h3>
          <Button type={'primary'} onClick={handleLogOut} danger>
            Log Out
          </Button>
        </div>
        {loading ? <Spin /> : <CategoryListComponent columns={columns} data={categories} />}
      </div>
    </>
  );
};

export default ListCategory;