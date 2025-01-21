import { Card,  CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import peopleLaptop from '/assets/people-laptop.png'
export default function GameCard({ game }) {
  return (
    <Card className="w-[30%] border rounded-[10px]">

      <CardBody>
      <img src={peopleLaptop} alt={'placeholder'} className=" w-full" />
      <div className="py-[16px]">
      <Typography variant="h5" className="mb-2 font-roboto text-h6">
          {game.title}
        </Typography>
        <Typography className="text-gray-600">{game.description}</Typography>
      </div>
      </CardBody>
      <CardFooter>
        <a href= {game.link}>
        <Button className="bg-blue  rounded-[10px]">Start Game</Button>
        </a>
      </CardFooter>
    </Card>
  );
}

GameCard.propTypes = {
    game: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.string, 
      link: PropTypes.string.isRequired,
    }).isRequired,
  };