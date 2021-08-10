import React, { useState } from 'react';

import Modal from 'react-modal';

import Switch from 'react-switch';
import { linearGradient, shade } from 'polished'

import BgImageTop from './assets/images/bg-top.svg';
import BgImageBottom from './assets/images/bg-bottom.svg';

import { Main } from './layout/main';

import { Image } from './components/Image';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Details } from './components/Card/Details';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { ReactModal } from './components/ReactModal';

Modal.setAppElement('#root');

export const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [monthly, setMonthly] = useState(false);

  function tooglePricing() {
    setMonthly(monthly === false ? true : false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <Main>
        <Image src={BgImageTop} alt="Background image Top" />
        <Header>
          <h1>Our Pricing</h1>

          <div> 
            {monthly === false ? (
              <span className="active">Anual</span>
            ) : (
              <span>Anual</span>
            )}
              <Switch
                onChange={tooglePricing}
                checked={monthly === true}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, "hsl(237, 63%, 64%)")}
                onColor="hsl(237, 63%, 64%)"
              />

              {monthly === true ? (
                <span className="active">Mensal</span>
              ) : (
                <span>Mensal</span>
              )}
          </div>
        </Header>

        {monthly === false ? (
          <Section>
            <Card>
              <p>Basic</p>
              <h2><span>$</span>199.99</h2>

              <Details>
                <p>500 GB Storage</p>
                <p>2 Users Allowed</p>
                <p>Send up to 3 GB</p>
              </Details>

              <Button>Lear More</Button>
            </Card>

            <Card className="active">
              <p>Professional</p>
              <h2><span>$</span>249.99</h2>

              <Details className="active-details">
                <p>1 TB Storage</p>
                <p>5 Users Allowed</p>
                <p>Send up to 10 GB</p>
              </Details>

              <Button className="active-button">Lear More</Button>
            </Card>

            <Card>
              <p>Master</p>
              <h2><span>$</span>399.99</h2>

              <Details>
                <p>2 TB Storage</p>
                <p>10 Users Allowed</p>
                <p>Send up to 20 GB</p>
              </Details>

              <Button>Lear More</Button>
            </Card>
          </Section>
        ) : (
          <Section>
            <Card>
              <p>Basic</p>
              <h2><span>$</span>19.99</h2>

              <Details>
                <p>500 GB Storage</p>
                <p>2 Users Allowed</p>
                <p>Send up to 3 GB</p>
              </Details>

              <Button>Lear More</Button>
            </Card>

            <Card className="active">
              <p>Professional</p>
              <h2><span>$</span>24.99</h2>

              <Details className="active-details">
                <p>1 TB Storage</p>
                <p>5 Users Allowed</p>
                <p>Send up to 10 GB</p>
              </Details>

              <Button className="active-button">Lear More</Button>
            </Card>

            <Card>
              <p>Master</p>
              <h2><span>$</span>39.99</h2>

              <Details>
                <p>2 TB Storage</p>
                <p>10 Users Allowed</p>
                <p>Send up to 20 GB</p>
              </Details>

              <Button>Lear More</Button>
            </Card>
          </Section>
        )}

        <Image src={BgImageBottom} alt="Background image Top" />
      </Main>
    </div>
  )
}
