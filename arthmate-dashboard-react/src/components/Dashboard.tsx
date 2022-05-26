import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { FiUser, FiFile, FiImage, FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Users", icon: FiUser },
  { name: "Posts", icon: FiFile },
  { name: "Albums", icon: FiImage },
];

export default function Dashboard({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Box>
        <form action="http://localhost:3001/createPost" method="POST">
          <FormControl>
            <Input id="userId" name="userId" />
          </FormControl>
          <FormControl>
            <Input id="title" name="title" />
          </FormControl>
          <FormControl>
            <Input id="body" name="body" />
          </FormControl>
          {/* <FormControl>
            <Input id="name" name="name" />
          </FormControl>
          <FormControl>
            <Input id="email" name="email" />
          </FormControl>
          <FormControl>
            <Input id="username" name="username" />
          </FormControl>
          <FormControl>
            <Input id="phone" name="phone" />
          </FormControl>
          <FormControl>
            <Input id="website" name="website" />
          </FormControl>
          <FormControl>
            <Input id="street" name="street" />
          </FormControl>
          <FormControl>
            <Input id="suite" name="suite" />
          </FormControl>
          <FormControl>
            <Input id="city" name="city" />
          </FormControl>
          <FormControl>
            <Input id="zipcode" name="zipcode" />
          </FormControl> */}
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />

      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="https://static.wixstatic.com/media/5e0fb3_00bdc4e058504279843e9c1329e937a7~mv2.png/v1/fill/w_444,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/New%20logo%20Arth-02.png" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "indigo.600",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image
        display={{ base: "flex", md: "none" }}
        w="40"
        src="https://static.wixstatic.com/media/5e0fb3_00bdc4e058504279843e9c1329e937a7~mv2.png/v1/fill/w_444,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/New%20logo%20Arth-02.png"
      />

      <Avatar
        size={"sm"}
        src={
          "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
        }
      />
    </Flex>
  );
};
