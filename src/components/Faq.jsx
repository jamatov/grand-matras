import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img from '../images/faq.jpg'

export default function Faq() {
  return (
    <section className='Faq'>
      <div className="container">
        <div className="row">
          <div className="faq-img col-md-6">
            <img src={img} alt="" />
          </div>
            
          <div className="faq-acardion col-md-6">
            <h2>Tez-tez so'raladigan savollar</h2>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

           
          </div>
        </div>

        
      </div>
    </section>
  )
}
