import clsx from 'clsx';

export default function Footer({ className }: Props) {
    return (

        <footer>
            <div className="w-full max-w-screen-xl h-full mx-auto p-4 md:py-8">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Pandu</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );
}

type Props = {
    className?: string;
};
