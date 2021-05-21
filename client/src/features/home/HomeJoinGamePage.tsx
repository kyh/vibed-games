import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { gameActions } from "features/game/gameSlice";
import { Button, Input } from "components";
import { Form } from "features/home/components/Form";
import { HomeGameCheckMutation } from "./__generated__/HomeGameCheckMutation";

const GAME_CHECK = gql`
  mutation HomeGameCheckMutation($input: GameInput!) {
    game(input: $input) {
      isValid
    }
  }
`;

type FormProps = {
  gameId: string;
};

export const HomeJoinGamePage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const storedGameId = useAppSelector((state) => state.game.gameId);
  const { register, handleSubmit, reset } = useForm<FormProps>();
  const [gameCheck] = useMutation<HomeGameCheckMutation>(GAME_CHECK);

  // Joining an existing game:
  const onSubmit = async ({ gameId }: FormProps) => {
    const { data } = await gameCheck({
      variables: { input: { code: gameId } },
    });

    if (data?.game?.isValid) {
      dispatch(gameActions.new_game({ gameId }));
      history.push("/join");
    } else {
      alert.show("Game code does not exist");
      reset();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("gameId", { required: true })}
          type="tel"
          placeholder="Game ID"
          defaultValue={storedGameId}
        />
        <Button type="submit">Join existing game</Button>
      </Form>
      <StartNewGameText>
        Or <Link to="/packs">start your own game</Link>
      </StartNewGameText>
    </>
  );
};

export const StartNewGameText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;

  a {
    margin-left: ${({ theme }) => theme.spacings(1.2)};
    text-decoration: underline;
  }
`;
