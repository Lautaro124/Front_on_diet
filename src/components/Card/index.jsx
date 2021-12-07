import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'

export default function CardComponent({ children, btnText, uri, width }) {
    const navigate = useNavigate()
    const handleClick = uri => navigate(uri)
	return (
		<Card sx={{minWidth: 275, maxWidth: width, margin: 'auto'}}>
			<CardContent sx={{paddingBottom: '10px'}}>{children}</CardContent>
			<CardActions>
				<Button
					onClick={() => handleClick(uri)}
					size='small'
					sx={{minWidth: 275, maxWidth: 800, margin: 'auto'}}
				>
					{btnText}
				</Button>
			</CardActions>
		</Card>
	)
}
