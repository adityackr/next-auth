import { getSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import AuthForm from '../components/Auth/AuthForm';

function AuthPage() {
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                router.replace('/');
            } else {
                setIsLoading(false);
            }
        });
    }, [router]);

    if (isLoading) {
        return <p className="center">Loading...</p>;
    }

    return <AuthForm />;
}

export default AuthPage;
