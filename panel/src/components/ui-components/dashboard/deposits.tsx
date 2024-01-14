import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./title";
import { useTranslation } from "react-i18next";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const Deposits = () => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <Title> {t("Recent Deposits")}</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Deposits;
