import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

const CharacterDetail = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const API_URL = `https://gateway.marvel.com/v1/public`;
      const PUBLIC_KEY = '523faa1f63c2a794c3254bb4db57f520'; 
      const HASH = 'bdb08446d771659a61578e7b6a68c0c6';

      try {
        const response = await fetch( `${API_URL}/characters/${characterId}?ts=1719374251939&apikey=${PUBLIC_KEY}&hash=${HASH}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCharacter(data.data.results[0]); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
        alt={`${character.name} thumbnail`}
      />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>{character.description || 'No description available'}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <strong>Comics:</strong>
          <ul>
            {character.comics.items.map(comic => (
              <li key={comic.resourceURI}>{comic.name}</li>
            ))}
          </ul>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CharacterDetail;




