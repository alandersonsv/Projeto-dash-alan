import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let error = null;
      if (isLogin) {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        error = signInError;
      } else {
        const { error: signUpError } = await supabase.auth.signUp({ email, password });
        error = signUpError;
      }

      if (error) {
        toast({
          title: 'Erro de Autenticação',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Sucesso!',
          description: isLogin ? 'Login realizado com sucesso.' : 'Cadastro realizado com sucesso. Você já pode fazer login.',
        });
        navigate('/'); // Redirect to dashboard after successful auth
      }
    } catch (error: any) {
      toast({
        title: 'Erro Inesperado',
        description: error.message || 'Ocorreu um erro inesperado.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta'}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin ? 'Faça login para acessar seus dashboards.' : 'Cadastre-se para começar a usar os Dashboards Lovable.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <Input
                id="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-10"
              />
            </div>
            <Button type="submit" className="w-full h-10" disabled={loading}>
              {loading ? 'Carregando...' : (isLogin ? 'Entrar' : 'Cadastrar')}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            {isLogin ? (
              <>
                Não tem uma conta?{' '}
                <Button variant="link" onClick={() => setIsLogin(false)} className="p-0 h-auto">
                  Cadastre-se
                </Button>
              </>
            ) : (
              <>
                Já tem uma conta?{' '}
                <Button variant="link" onClick={() => setIsLogin(true)} className="p-0 h-auto">
                  Entrar
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
