//Next-NextUi
import NextLink from "next/link";
import { Image, Spacer, Text, useTheme, Link } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
        alt="Pokemon icon"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      {/* Flex 1 para que tome todo el espacio disponible */}
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites">
        <Text color="white">Favoritos</Text>
      </NextLink>
    </div>
  );
};
