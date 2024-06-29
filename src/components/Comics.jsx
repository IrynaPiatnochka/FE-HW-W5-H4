import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const API_URL = `https://gateway.marvel.com/v1/public`;
const PUBLIC_KEY = '523faa1f63c2a794c3254bb4db57f520'; 
const HASH = 'bdb08446d771659a61578e7b6a68c0c6';

const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {

      try {
        const response = await fetch(
            `${API_URL}/comics?ts=1719374251939&apikey=${PUBLIC_KEY}&hash=${HASH}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setComics(data.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchComics();
  }, []);

  return (
    <Row>
      {comics.map(comic => (
        <Col key={comic.id} xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: '18rem', marginBottom: '20px' }}>
            <Card.Img
              variant="top"
              src={`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`}
              alt={`${comic.title} thumbnail`}
            />
            <Card.Body>
              <Card.Title>{comic.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Comics;
