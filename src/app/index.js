import React from 'react';
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';

function Index(){
  const blurFilter = useMemo(() => new BlurFilter(4), []);

  return (
    <Stage>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
      />

      <Container x={400} y={330}>
        <Text 
          text="Hello World" 
          style = {
          new TextStyle({
            fill: ["#26f7a3", "#01d27e"],
          })
        }
          anchor={{ x: 0.5, y: 0.5 }} />
      </Container>
    </Stage>
  );
};

export default Index;
