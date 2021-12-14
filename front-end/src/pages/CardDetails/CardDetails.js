import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import * as backEndApi from '../../api/BackEndApi';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

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
    <section>
      <Header />
      <Card content={card} />
      <Footer />
    </section>
  );
};

export default CardDetails;
