import { useEffect, useState, useCallback } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

function EffectSection() {
  const input = useInput();

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={() => setModal(true)}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          В солнечный день я бродил в берёзовом перелеске. Вдали послышался
          знакомый лесной голосок. Это куковала кукушка. Её я слышал много раз,
          но никогда не видел. Увидеть её совсем непросто. Я иду к ней на
          голосок, а она – от меня. В прятки со мной играет. Решил наоборот
          поиграть: я спрячусь, а ты поищи.
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
      {loading && <p>Loading..</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <h6>{input.value}</h6>
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default EffectSection;
