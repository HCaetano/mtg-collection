import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import * as backEndApi from '../api/BackEndApi';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CardDetails = () => {
  const [card, setCard] = useState({});
  const { id } = useParams()

  const findCardById = useCallback(() => {
    backEndApi.findCardById(id).then((response) => setCard(response.data));
  }, [id]);

  useEffect(() => {
    findCardById();
  }, []);

  if (!card) return 'Card not found';

  return (
    <>
      <Header />
      <Card content={card} />
      <Footer />
    </>
  );
};

export default CardDetails;
