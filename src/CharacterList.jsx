import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const API_URL = `https://gateway.marvel.com/v1/public`;
const PUBLIC_KEY = '523faa1f63c2a794c3254bb4db57f520'; 
const HASH = 'bdb08446d771659a61578e7b6a68c0c6';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
     
      try {
        const response = await fetch(
          `${API_URL}/characters?ts=1719374251939&apikey=${PUBLIC_KEY}&hash=${HASH}`);
        if (!response.ok) {
          throw new Error('No network response');
        }
        const data = await response.json();
        setCharacters(data.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <Row>
      {characters.map(character => (
        <Col key={character.id} xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: '18rem', marginBottom: '20px' }}>
            <Card.Img
              variant="top"
              src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
              alt={`${character.name} thumbnail`}
            />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Link to={`/characters/${character.id}`}>
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CharacterList;
