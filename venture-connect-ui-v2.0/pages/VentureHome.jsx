import {useState} from 'react';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Layout from '../src/components/Layout';
import Venturefeed from '../src/components/Venturefeed';
import Leftprofcomp from '../src/components/Leftprofcomp';
import Rightcomp from '../src/components/rightcomp';
export default function  VentureHome()  {
return  (
  <Layout>

  <div id="base">
  <Stack  direction="horizontal" gap={5} justify="center">
      <div className="p-2" id="prof">
      <Leftprofcomp></Leftprofcomp>

      </div>
      <div className="p-2" id="feed"><Venturefeed></Venturefeed></div>
      <div className="p-2" id="others">
        <Rightcomp></Rightcomp>
      </div>
    </Stack>

  </div>
  </Layout>
)};
