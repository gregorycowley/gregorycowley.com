import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useSpring, animated } from "react-spring";

import ButtonLabel from "components/_ui/Buttons/ButtonLabel";
import mq from "common/styles/breakpoints";

const Container = styled.div(
	({ theme, alignLeft }) => css`
		position: relative;
		display: flex;
		width: 100%;
		justify-content: ${alignLeft ? "flex-start" : "center"};
		margin-bottom: ${theme.spacingXS}px;
		${mq("small")} {
			flex-wrap: wrap;
			align-items: center;
			height: auto;
			justify-content: stretch;
		}
	`
);

const ButtonInitial = styled(({ style, className, children }) => (
	<animated.div style={style} className={className} children={children} />
))(
	({ alignLeft }) => css`
		position: absolute;
		left: ${alignLeft ? 0 : "50%"};
		transform: translateX(${alignLeft ? 0 : "-50%"});
		${mq("small")} {
			flex-grow: 1;
			width: 100%;
			left: 50%;
			transform: translateX(-50%);
		}
	`
);

const ButtonMargin = styled(ButtonLabel)(
	({ theme }) => css`
		margin-left: 1px;
		margin-right: 1px;
		white-space: nowrap;
		${mq("small")} {
			flex-grow: 1;
			margin-bottom: 1px;
		}
	`
);

const ButtonContainer = styled(animated.div)(
	({ theme }) => css`
		${mq("small")} {
			flex-grow: 1;
			width: 100%;
		}
	`
);

const ButtonContact = ({ alignLeft, label, email }) => {
	const [isOpen, setOpen] = useState(false);
	const [isCopied, setCopied] = useState(false);
	const emailValue = email || "contact-button-email";
	let timer = null;
	const config = { mass: 0.8, tension: 800, friction: 40 };

	const stylesButtonLeft = useSpring({
		config: config,
		opacity: isOpen ? 1 : 0,
		pointerEvents: isOpen ? "all" : "none",
		transform: isOpen ? "translateX(0)" : "translateX(-50%)",
	});

	const stylesButtonRight = useSpring({
		config: config,
		opacity: isOpen ? 1 : 0,
		pointerEvents: isOpen ? "all" : "none",
		transform: isOpen ? "translateX(0)" : "translateX(50%)",
	});

	const stylesButtonInitial = useSpring({
		config: config,
		opacity: isOpen ? 0 : 1,
		pointerEvents: isOpen ? "none" : "all",
	});

	const showButtons = () => setOpen(!isOpen);

	const showFeedback = () => {
		setCopied(true);
		timer = setTimeout(() => setCopied(false), 3000);
	};

	useEffect(() => {
		return () => {
			clearTimeout(timer);
		};
	}, [timer]);

	return (
		<Container alignLeft={alignLeft}>
			<ButtonInitial style={stylesButtonInitial} alignLeft={alignLeft}>
				<ButtonLabel large onClick={showButtons}>
					{label || "FormattedMessage: contact-button-email"}
				</ButtonLabel>
			</ButtonInitial>

			<ButtonContainer style={stylesButtonLeft}>
				<CopyToClipboard text={emailValue} onCopy={showFeedback}>
					<ButtonMargin large isOpen={isOpen}>
						FormattedMessage: contact-button-copy
					</ButtonMargin>
				</CopyToClipboard>
			</ButtonContainer>

			<ButtonContainer style={stylesButtonRight}>
				<ButtonMargin
					large
					right
					href={`mailto:${emailValue}`}
					target="_blank"
					isOpen={isOpen}
				>
					FormattedMessage: contact-button-send
				</ButtonMargin>
			</ButtonContainer>
		</Container>
	);
};

export default ButtonContact;
