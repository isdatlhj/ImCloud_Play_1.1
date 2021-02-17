import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineInstagram } from 'react-icons/ai';

export const sizes = ['small', 'medium', 'large'];

export const profileProps = {
	src: PropTypes.string.isRequired,
	link: PropTypes.string,
	size: PropTypes.oneOf(sizes),
	no_sns: PropTypes.string,
	influencer_id: PropTypes.string,
};

const Sns = styled.div`
	opacity: 0;
	visibility: hidden;
	transition: all 0.4s ease;
	display: flex;
	align-items: center;
	color: rgb(61, 61, 61);
	font-size: 13px;
	span {
		padding-left: 0.3rem;
	}
`;

const Profile = styled.div`
	outline: none;
	cursor: pointer;
	border: none;
	transition: color 0.2s, background-color 0.2s;

	&:snslink {
		cursor: not-allowed;
		opacity: 0.5;
		display: none;
		width: 10px;
	}

	&:hover {
		${Sns} {
			opacity: 1;
			visibility: visible;
		}
	}
`;

const ProfileImg = styled.img`
	object-fit: cover;
	&.small {
		width: 170px;
		height: 230px;
	}
	&,
	&.medium {
		height: 400px;
	}
	&.large {
		height: 500px;
	}

	Profile:hover {
		display: none;
	}
`;

const ProfilePhoto = ({ src, size, influencer_id }) => {
	const url = 'https://www.instagram.com/';
	return (
		<Profile className={size}>
			<a href={url + influencer_id} target="blank">
				<ProfileImg className={size} src={src} />
			</a>
			<Sns>
				<AiOutlineInstagram size={20} />
				<span>Follow {influencer_id}</span>
			</Sns>
		</Profile>
	);
};

export default ProfilePhoto;

ProfilePhoto.propTypes = profileProps;
