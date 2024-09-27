/* eslint-disable react-hooks/exhaustive-deps*/
import { Center,  Spinner, useDisclosure, Wrap, WrapItem} from "@chakra-ui/react";
import { memo, FC, useEffect, useCallback} from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetaiModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManegement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  
  useEffect(() => getUsers(), [])

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  },[users, onSelectUser, onOpen]);

  return (
    <>
      {loading ? (
          <Center h="100vh">
            <Spinner />
          </Center>
        ) : (
          <Wrap p={{ base: 4, md: 10}}>
              {users.map((user) => (
                <WrapItem key={user.id} mx="auto">
                  <UserCard
                  id={user.id} 
                  imageUrl="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUUzJTgzJUE5JUUzJTgzJUIzJUUzJTgzJTgwJUUzJTgzJUEwJUUzJTgwJTgyJUUzJTgwJTgyJUUzJTgwJTgyfGVufDB8fDB8fHww"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
                </WrapItem>
              ))}
          </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} />
    </>
    
  )
});

