import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
// import './fonts.css';
import ReactMarkdown from 'react-markdown';
import styles from './styles/post.module.css';
const absContainer: React.CSSProperties = {
	backgroundColor: 'white',
};

const heading: React.CSSProperties = {
	margin: '0px',
	textAlign: 'center',
	fontSize: '30px',
	marginBottom: '10px',
	marginTop: '10px',
	color: 'red',
};
const gridContainer: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
	gridTemplateRows: 'repeat(auto-fit,minmax(200px,1fr))',
};

const label = 'THE LION KING PREQUEL';

const IMAGE_PATH1 = 'lion/mufasa.jpeg';
const IMAGE_PATH2 = 'prabhas/billa.jpeg';

const highlightColor = '#ed6c02';
// New Date('july 3 2022')
const markdown = `
__Mufasa: The Lion King__ a prequel to the blockbuster __The Lion King__. Will release in theaters __2024.__ It’s the origin story of __Mufasa.__ Directed by __Barry Jenkins.__
`;

export const Post: React.FC<{
	title: string;
	description: string;
	slogan: string;
}> = ({title, description, slogan}) => {
	return (
		<div className={styles.absContainer}>
			{/* <h2 style={heading} >Cinematic Universe</h2> */}
			{/* <div style={text}>
        s
      </div> */}
			{/* <div style={gridContainer}> */}
			{/* {
          images.map((img: string) => {
            return <div style={{ border: '1px solid white' }}>
              <Img style={{ height: '100%', width: '100%' }} src={img} />
            </div>
          })
        } */}
			<h2 className={styles.logo}>@CU_Official_E</h2>
			<div className={styles.container_c}>
				<div className="top_heading">
					{/* <h2 style={{
            fontSize: '45px', marginBottom: '36px'
          }} >
            <b style={{ color: highlightColor }}>
            </b>

            new look for a ad shoot   </h2> */}
				</div>
				<div className={styles.image_wrapper}>
					{/* {
            images.map((img: string,index) => {
              return <div key={img}>
                <Img height='100%' width='100%' src={img} />
              </div>
            }
            )
          } */}
					<div className={styles.lastImage}>
						<Img
							height="300px"
							width="100%"
							style={{borderRadius: '3%'}}
							src={
								'https://pbs.twimg.com/media/FcPw3mDacAEp7wH?format=jpg&name=medium'
							}
						/>
					</div>
					{/* <div className={styles.lastImage}>
            <Img height='300px'
              width='100%' style={{ borderRadius: '3%' }} src={staticFile(IMAGE_PATH2)} />
          </div> */}
				</div>
				<div className={styles.bottom_header}>
					<Divider>
						{' '}
						<Chip
							style={{
								height: '40px',
								width: '320px',
								fontSize: '25px',
								fontFamily: '"Hind Siliguri", sans-serif',
							}}
							variant="filled"
							label={label}
							color="warning"
						/>
					</Divider>
					<div
						className={styles.para}
						style={{
							paddingLeft: '5px',
							paddingRight: '5px',
							fontSize: '25px',
							lineHeight: '2.2em',
							marginLeft: '20px',
							marginRight: '20px',
							marginTop: '20px',
						}}
					>
						<p style={{marginTop: '0px', marginBottom: '0px'}}>
							{/* <b style={{color:highlightColor}}>

</b> */}

							<ReactMarkdown
								components={{
									strong: ({node, ...props}) => (
										<b style={{color: highlightColor}} {...props} />
									),
									p: ({node, ...props}) => (
										<p style={{margin: '0px'}} {...props} />
									),
								}}
							>
								{/* ##### Hello, *world*!.
  
  ##hello */}
								{markdown}
							</ReactMarkdown>
						</p>
					</div>
				</div>
			</div>

			{/* </div> */}
		</div>
	);
};

// <div className={styles.grid_table} >
// <div className={styles.lang}>
//   Telugu
// </div>
// <div className={styles.value}>
//   Star Maa
// </div>
// <div className={styles.time}>
//   5.30PM
// </div>

// <div className={styles.lang}>
//   Hindi
// </div>
// <div className={styles.value}>
//   Zee Cinema
// </div>
// <div className={styles.time}>
//   8PM
// </div>

// <div className={styles.lang}>
//   Malayalam
// </div>
// <div className={styles.value}>
//   Asianet
// </div>
// <div className={styles.time}>
//   7PM
// </div>

// </div>

//  {/* <table>
//           <tr>
//             <th>Area</th>
//             <th> Collection </th>
//           </tr>
//           {
//             collectionData.map((obj) => {
//               return <tr key={obj.area}>
//                 <td style={{ color: 'red' }} > {obj.area} </td>
//                 <td> {numDifferentiation(obj.collection)} </td>
//               </tr>
//             })
//           }

//         </table> */}
