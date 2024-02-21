import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Layout/Header/Header';
import Title from '../components/Title/Title';
import { useStateContext } from '../context/ContextProvider';
import ModalMobileMenu from '../components/ModalMobileMenu/ModalMobileMenu';
import FormGraphics from '../components/FormGraphics/FormGraphics';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Table from '../components/Table/Table';
import { ClipLoader } from 'react-spinners';
import GraphBlock from '../components/GraphBlocks/GraphBlocks';
import Pagination from '../components/Pagination/Pagination';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Companies = () => {
  const { tableDisplay, selectedField, setSelectedField, activeMenu } = useStateContext();
  const { userToken } = useAuth();
  const [graphsData, setGraphsData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState(['', '', '', '', '', '', '', '']);

  const [showDropdownSearch, setShowDropdownSearch] = useState(false);
  const [dropdownOptionsSearch, setDropdownOptionsSearch] = useState([]);

  const handleDropdownSelect = option => {
    setSearch(option);
  };

  const handleDropdownClose = () => {
    setShowDropdownSearch(false);
  };

  useEffect(() => {
    getMines(search);
  }, [currentPage, perPage, filters, search]);

  const getMines = async (search = '') => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.get(`${apiUrl}/mines`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        params: {
          page: currentPage,
          perPage: perPage,
          name: search ? search : filters[0],
          primaryCommodity: filters[1],
          developmentStage: filters[2],
          mineType: filters[3],
          listOfCommodities: filters[4] ? filters[4].split(',') : '',
          country: filters[5],
          region: filters[6],
          activityStatus:
            filters[7] === '' || filters[7] === 'None' ? '' : filters[7] === 'Active Status' ? 'active' : 'inactive',
        },
      });

      if (response.status === 200 || response.status === 204) {
        setGraphsData(response?.data);
        setDropdownOptionsSearch(response?.data?.mines.map(item => item?.name));
      } else {
        console.error('Failed!!!');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex relative bg-main-bg">
      <Sidebar admin={true} />
      <ModalMobileMenu />
      <div
        className={`bg-main-bg min-h-screen w-full ${
          activeMenu ? 'ml-[240px]' : 'ml-[102px] transition-all duration-300'
        } bg-main-bg px-[24px] max-[1024px]:ml-[0] max-[1024px]:px-[0]`}
      >
        <Header />
        <main className="pt-[22px] pb-[38px] max-[1024px]:px-[32px] max-[768px]:px-[16px]">
          <Title title="All Companies" />
          <FormGraphics
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            filters={filters}
            setFilters={setFilters}
            search={search}
            setSearch={setSearch}
            dropdownOptionsSearch={dropdownOptionsSearch}
            setShowDropdownSearch={setShowDropdownSearch}
            showDropdownSearch={showDropdownSearch}
            handleDropdownSelect={handleDropdownSelect}
            handleDropdownClose={handleDropdownClose}
          />
          {tableDisplay ? (
            graphsData?.mines.length > 0 && (
              <Table graphsData={graphsData?.mines} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            )
          ) : loading ? (
            <div>
              <ClipLoader
                color={'blue'}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <GraphBlock
              graphsData={graphsData?.mines}
              selectedField={selectedField}
              setSelectedField={setSelectedField}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
          <div className="mt-[20px]">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(graphsData?.count / perPage)}
              onPageChange={setCurrentPage}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Companies;
