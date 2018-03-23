import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'


export const calculateWinner = (players) =>
{
if (players[0].score > players[1].score) return players[0].userId
return players[1].iserId
}
