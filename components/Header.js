import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img src="https://media.discordapp.net/attachments/898657008553701406/960317925754040340/solnftdropslogo.png"></img>
      <p className="text-2xl dark:text-white text-center">
        <Link href="https://discord.gg/mZEgBr7r">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
