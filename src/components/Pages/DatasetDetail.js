import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/DatasetDetail.css';

const DatasetDetail = () => {
  const { id } = useParams();
  const [dataset, setDataset] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDatasetDetail = async () => {
    try {
      const response = await fetch(`http://116.206.212.234:4000/dataset/detail/${id}`);
      const data = await response.json();
      setDataset(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching the dataset detail:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatasetDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dataset-detail-container">
      
      <h2>{dataset.uraian_dssd}</h2>
      <p>{dataset.description}</p>
      <div className="dataset-info">
        <p>Organisasi: {dataset.nama_opd}</p>
        <p>Kode Urusan: {dataset.kode_urusan}</p>
        <p>Kategori: {dataset.kategori_string}</p>
        <p>Jenis Data: {dataset.jenis_string}</p>
        <p>Dimensi: {dataset.dimensi}</p>
        <p>Satuan: {dataset.satuan}</p>
        <p>Terakhir Dimodifikasi: {new Date(dataset.modified).toLocaleDateString()}</p>
      </div>
      {dataset.download_url && (
        <a href={`http://${dataset.download_url}`} download>
          Download Data
        </a>
      )}
    </div>
  );
};

export default DatasetDetail;
