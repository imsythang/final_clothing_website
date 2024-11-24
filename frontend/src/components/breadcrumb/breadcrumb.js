import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BasicBreadcrumbs({ links }) {
    return (

        <div role="presentation" style={{ paddingTop: '91px', paddingLeft: "65px" }}>
            <Breadcrumbs aria-label="breadcrumb" >
                {links.map((link, index) => (
                    index < links.length - 1 ? <Link underline="hover" fontFamily="Jura" color="black" fontWeight="300"
                        fontSize="20px" href={links[index].path}>
                        {links[index].name}
                    </Link> : <Typography sx={{ color: 'text.primary', fontFamily: "Jura", fontWeight: "300", fontSize: "20px" }}>{links[index].name}</Typography>
                ))}
            </Breadcrumbs>
        </div>
    );
}
