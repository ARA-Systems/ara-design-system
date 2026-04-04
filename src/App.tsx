import { useState } from 'react'
import {
  Mail, Eye, EyeOff, Search, BarChart3, CircleDollarSign, ShoppingBag, Settings,
  Info, CheckCircle2, AlertTriangle, XCircle,
} from 'lucide-react'
import {
  Button, Badge, Avatar, Alert, Input, Textarea, Select, Checkbox, Radio, Toggle,
  Card, CardHeader, CardTitle, CardContent,
  Divider, Progress, Spinner, Skeleton, TabPills, Breadcrumb, Tooltip,
  StatCard, ChangeBadge, AreaChart, SearchInput, BottomNav,
  ToastProvider, useToast,
} from './components'
import './styles/globals.css'

const salesData = [
  { label: '00:00', value: 20 },
  { label: '02:00', value: 45 },
  { label: '04:00', value: 30 },
  { label: '06:00', value: 80 },
  { label: '08:00', value: 160 },
  { label: '10:00', value: 280 },
  { label: '12:00', value: 350 },
  { label: '14:00', value: 420 },
]

const ticketData = [
  { label: '00:00', value: 12 },
  { label: '02:00', value: 14 },
  { label: '04:00', value: 11 },
  { label: '06:00', value: 16 },
  { label: '08:00', value: 18 },
  { label: '10:00', value: 15 },
  { label: '12:00', value: 20 },
  { label: '14:00', value: 22 },
]

const navItems = [
  { id: 'dash', label: 'Dash', icon: <BarChart3 size={20} /> },
  { id: 'saldo', label: 'Saldo', icon: <CircleDollarSign size={20} /> },
  { id: 'produtos', label: 'Produtos', icon: <ShoppingBag size={20} /> },
  { id: 'ajustes', label: 'Ajustes', icon: <Settings size={20} /> },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{
        fontSize: 'var(--text-xs)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: 'var(--c-fg-muted)',
        marginBottom: '1rem',
        paddingBottom: '0.5rem',
        borderBottom: '1px solid var(--c-border)',
      }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Row({ children, wrap = true }: { children: React.ReactNode; wrap?: boolean }) {
  return (
    <div style={{ display: 'flex', flexWrap: wrap ? 'wrap' : 'nowrap', gap: '0.75rem', alignItems: 'center' }}>
      {children}
    </div>
  )
}

function ToastDemo() {
  const { addToast } = useToast()
  return (
    <Row>
      <Button size="sm" onClick={() => addToast({ message: 'Operação realizada com sucesso!', type: 'success' })}>
        Success Toast
      </Button>
      <Button size="sm" variant="ghost" onClick={() => addToast({ message: 'Atenção: verifique os dados.', type: 'warning' })}>
        Warning Toast
      </Button>
      <Button size="sm" variant="destructive" onClick={() => addToast({ message: 'Erro ao processar pagamento.', type: 'error' })}>
        Error Toast
      </Button>
      <Button size="sm" variant="outline" onClick={() => addToast({ message: 'Pedido atualizado.', type: 'info' })}>
        Info Toast
      </Button>
    </Row>
  )
}

export default function App() {
  const [showPassword, setShowPassword] = useState(false)
  const [checked, setChecked] = useState(false)
  const [radio, setRadio] = useState('a')
  const [toggled, setToggled] = useState(false)
  const [activeTab, setActiveTab] = useState('vendas')
  const [activeNav, setActiveNav] = useState('dash')

  return (
    <ToastProvider>
      <div style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        {/* Header */}
        <header style={{
          background: 'var(--c-surface)',
          borderBottom: '1px solid var(--c-border)',
          padding: '1.25rem 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 'var(--radius-md)',
            background: 'var(--c-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>A</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--c-heading)' }}>
              ARA Design System
            </span>
            <span style={{
              marginLeft: '0.5rem',
              fontSize: 'var(--text-xs)',
              color: 'var(--c-fg-muted)',
              background: 'var(--c-surface-alt)',
              border: '1px solid var(--c-border)',
              borderRadius: 'var(--radius-pill)',
              padding: '0.1rem 0.5rem',
            }}>v1.0</span>
          </div>
        </header>

        <main style={{ maxWidth: 960, margin: '0 auto', padding: '2.5rem 2rem 6rem' }}>

          {/* Dashboard Preview */}
          <Section title="Dashboard">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
              <StatCard label="Total em vendas" value="R$ 8.283,35" />
              <StatCard label="Pedidos feitos" subtitle="Todos" value="652" change={12} />
              <StatCard label="Pedidos pagos" subtitle="Todos" value="231" change={-4} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <AreaChart data={salesData} title="Desempenho de vendas" height={200} />
              <AreaChart data={ticketData} title="Evolução do Ticket Médio" height={200} />
            </div>
          </Section>

          <Section title="Buttons">
            <Row>
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </Row>
            <div style={{ marginTop: '0.75rem' }}>
              <Row>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </Row>
            </div>
          </Section>

          <Section title="Badges & Change">
            <Row>
              <Badge>Default</Badge>
              <Badge variant="success">Pago</Badge>
              <Badge variant="warning">Pendente</Badge>
              <Badge variant="error">Cancelado</Badge>
              <Badge variant="info">Info</Badge>
            </Row>
            <div style={{ marginTop: '0.75rem' }}>
              <Row>
                <ChangeBadge value={12} />
                <ChangeBadge value={5} />
                <ChangeBadge value={0} />
                <ChangeBadge value={-4} />
                <ChangeBadge value={-15} />
              </Row>
            </div>
          </Section>

          <Section title="Inputs">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Input placeholder="Sem ícone" />
              <Input placeholder="you@example.com" leftIcon={<Mail size={16} />} />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                rightIcon={
                  <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', color: 'var(--c-fg-muted)', padding: 0 }}
                    onClick={() => setShowPassword(v => !v)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                }
              />
              <Input
                placeholder="Buscar..."
                leftIcon={<Search size={16} />}
                rightIcon={<Mail size={16} />}
              />
              <Input placeholder="Com erro" error="Campo obrigatório" />
              <Input placeholder="Com hint" hint="Use letras e números" />
            </div>
          </Section>

          <Section title="Search Input">
            <SearchInput placeholder="Buscar componentes..." style={{ maxWidth: 400 }} />
          </Section>

          <Section title="Textarea & Select">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Textarea placeholder="Escreva sua mensagem..." rows={4} />
              <Select>
                <option value="">Selecione uma opção</option>
                <option value="1">Opção 1</option>
                <option value="2">Opção 2</option>
                <option value="3">Opção 3</option>
              </Select>
            </div>
          </Section>

          <Section title="Checkbox, Radio & Toggle">
            <Row>
              <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} label="Aceito os termos" />
              <Checkbox checked label="Marcado" readOnly />
              <Checkbox disabled label="Desabilitado" />
            </Row>
            <div style={{ marginTop: '0.75rem' }}>
              <Row>
                <Radio name="demo" value="a" checked={radio === 'a'} onChange={() => setRadio('a')} label="Opção A" />
                <Radio name="demo" value="b" checked={radio === 'b'} onChange={() => setRadio('b')} label="Opção B" />
                <Radio name="demo" value="c" checked={radio === 'c'} onChange={() => setRadio('c')} label="Opção C" />
              </Row>
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <Row>
                <Toggle checked={toggled} onChange={e => setToggled(e.target.checked)} label={toggled ? 'Ativado' : 'Desativado'} />
              </Row>
            </div>
          </Section>

          <Section title="Alerts">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Alert type="success" message="Pagamento processado com sucesso!" />
              <Alert type="warning" message="Seu saldo está abaixo do mínimo." />
              <Alert type="error" message="Falha ao conectar com o servidor." />
              <Alert type="info" message="Nova atualização disponível." />
            </div>
          </Section>

          <Section title="Toast">
            <ToastDemo />
          </Section>

          <Section title="Progress & Spinner">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 480 }}>
              <Progress value={30} />
              <Progress value={65} />
              <Progress value={100} />
            </div>
            <div style={{ marginTop: '1rem' }}>
              <Row>
                <Spinner size="sm" />
                <Spinner />
                <Spinner size="lg" />
              </Row>
            </div>
          </Section>

          <Section title="Skeleton">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: 320 }}>
              <Skeleton style={{ height: 16, width: '60%' }} />
              <Skeleton style={{ height: 16, width: '80%' }} />
              <Skeleton style={{ height: 16, width: '40%' }} />
              <Skeleton style={{ height: 80, marginTop: '0.5rem' }} />
            </div>
          </Section>

          <Section title="Avatar">
            <Row>
              <Avatar src="https://i.pravatar.cc/40?img=1" alt="User A" />
              <Avatar src="https://i.pravatar.cc/40?img=2" alt="User B" size="lg" />
              <Avatar alt="Patrick Lima" />
              <Avatar alt="ARA" size="sm" />
            </Row>
          </Section>

          <Section title="Tab Pills">
            <TabPills
              tabs={[
                { id: 'vendas', label: 'Vendas' },
                { id: 'pedidos', label: 'Pedidos' },
                { id: 'produtos', label: 'Produtos' },
              ]}
              activeId={activeTab}
              onChange={setActiveTab}
            />
          </Section>

          <Section title="Breadcrumb">
            <Breadcrumb items={[
              { label: 'Dashboard', href: '#' },
              { label: 'Pedidos', href: '#' },
              { label: '#4821' },
            ]} />
          </Section>

          <Section title="Divider">
            <Divider />
            <div style={{ marginTop: '1rem' }}>
              <Divider label="ou" />
            </div>
          </Section>

          <Section title="Tooltip">
            <Row>
              <Tooltip content="Informação adicional">
                <Button variant="outline" size="sm">
                  <Info size={14} /> Hover me
                </Button>
              </Tooltip>
              <Tooltip content="Pagamento confirmado" placement="top">
                <Badge variant="success">
                  <CheckCircle2 size={12} /> Pago
                </Badge>
              </Tooltip>
            </Row>
          </Section>

          <Section title="Bottom Nav">
            <div style={{ maxWidth: 390, border: '1px solid var(--c-border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <div style={{ height: 120, padding: '1rem', color: 'var(--c-fg-muted)', fontSize: 'var(--text-sm)' }}>
                Seção ativa: <strong>{navItems.find(i => i.id === activeNav)?.label}</strong>
              </div>
              <BottomNav items={navItems} activeId={activeNav} onChange={setActiveNav} />
            </div>
          </Section>

        </main>
      </div>
    </ToastProvider>
  )
}
