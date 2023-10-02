import PropTypes from 'prop-types';
import { ProfileWrap, Description, Avatar, Name, Tag, Location, Stats, LisItem, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileWrap>
            <Description>
                <Avatar src={avatar} alt={username} />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <LisItem>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </LisItem>
                <LisItem>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </LisItem>
                <LisItem>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </LisItem>

            </Stats>
        </ProfileWrap>
    );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};