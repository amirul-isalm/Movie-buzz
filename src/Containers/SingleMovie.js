import React from 'react';
import { Card } from 'react-bootstrap';

const SingleMovie = ({ moviee }) => {
    const {
      title,
      director,
      episode_id,
      characters,
      release_date,
      opening_crawl,
      producer,
    } = moviee;
    return (
      <div>
        <Card style={{ width:"auto" }} style={{height:"auto"}} className="rounded-3 movieCart  py-2">
          <Card.Body className="h-100">
                    <Card.Title>{ title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Release: {release_date}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Episod ID: {episode_id}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Total Cast: {characters?.length}
            </Card.Subtitle>
            <Card.Text>
             <b>Director: </b> {director}
            </Card.Text>
            <Card.Text>
             <b>Producer: </b> {producer}
            </Card.Text>
            <Card.Text>
             <b>Opening Crawl: </b> {opening_crawl.split(" ").slice(0,15)}
            </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
    );
};

export default SingleMovie;