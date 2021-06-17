import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import theme from "../styles/theme";

const StyledButton = styled(Button)``;

export default function ButtonBlock() {
	return (
		<StyledButton color={theme.palette.primary.main}>Hello World</StyledButton>
	);
}
