import cardBg from 'images/cardBg.png';
import { Logo } from 'components/Logo/Logo';
import {
  Card,
  BackgroundImage,
  AvatarImage,
  Thumb,
  FrameThumb,
  CardUpperText,
  CardLowerText,
  CardButton,
} from './UserCard.styled';

export const UserCard = ({ userData, onFollow, onClick }) => {
  const { user, tweets, followers, avatar, id } = userData;

  const isFollow = onFollow.some(followId => id === followId);

  const formattedFollowers = followers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Card>
      <Logo />
      <BackgroundImage src={cardBg} alt="background"></BackgroundImage>
      <Thumb />
      <FrameThumb />
      <AvatarImage
        src={avatar}
        alt={`${user} avatar`}
        width="70"
        height="70"
      ></AvatarImage>

      <CardUpperText>{tweets} Tweets</CardUpperText>
      <CardLowerText>{formattedFollowers} Followers</CardLowerText>
      <CardButton type="button" id={id} onClick={onClick} isFollow={isFollow}>
        {isFollow ? 'Following' : 'Follow'}
      </CardButton>
    </Card>
  );
};
