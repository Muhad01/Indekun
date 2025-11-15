"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, CartesianGrid } from "recharts"
import { 
  Wallet, 
  TrendingUp, 
  Users, 
  Compass, 
  Send, 
  Download, 
  Coins, 
  ShoppingCart,
  Repeat,
  UserPlus,
  CreditCard,
  Info,
  LayoutGrid,
  AlignJustify,
  ChevronLeft,
  Bell,
  BellOff,
  HelpCircle,
  Settings,
  X,
  ArrowUpRight,
  ArrowDownRight,
  Copy,
  QrCode,
  AlertCircle,
  Check,
  ExternalLink
} from "lucide-react"

export default function Page() {
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  // Dummy portfolio data with variation
  const portfolioData = [
    { date: "Dec 10", value: 85000 },
    { date: "Dec 12", value: 87000 },
    { date: "Dec 14", value: 82000 },
    { date: "Dec 16", value: 88000 },
    { date: "Dec 18", value: 90000 },
    { date: "Dec 20", value: 85000 },
    { date: "Dec 22", value: 92000 },
    { date: "Dec 24", value: 88000 },
    { date: "Dec 26", value: 95000 },
    { date: "Dec 28", value: 91000 },
    { date: "Dec 30", value: 98000 },
    { date: "Jan 1", value: 94000 },
    { date: "Jan 2", value: 96000 },
    { date: "Jan 4", value: 92000 },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid lg:grid-cols-[220px_1fr]">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-md bg-card border border-border flex items-center justify-center"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <AlignJustify className="h-5 w-5" />
        </button>

        {/* Sidebar */}
        <aside 
          className={`
            fixed lg:static inset-y-0 left-0 z-40 w-[220px] border-r border-border transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
          style={{ backgroundColor: '#222526' }}
        >
          <div className="flex h-14 items-center justify-between px-4 pt-4">
            <div className="flex items-center">
              <span className="text-xs text-muted-foreground font-semibold">MENU</span>
            </div>
            <div 
              className="w-6 h-6 rounded-full border border-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsSidebarOpen(false)}
            >
              <ChevronLeft className="h-3 w-3 text-white" />
            </div>
          </div>
          
          <nav className="space-y-2 px-3 py-4">
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <LayoutGrid className="h-4 w-4" />
              Portfolio
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <TrendingUp className="h-4 w-4" />
              Market
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <Users className="h-4 w-4" />
              Accounts
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <Compass className="h-4 w-4" />
              Discover
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <Send className="h-4 w-4" />
              Send
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <Download className="h-4 w-4" />
              Receive
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <Coins className="h-4 w-4" />
              Yield
              <Badge className="ml-auto bg-primary text-primary-foreground text-xs px-1.5 py-0">New</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <ShoppingCart className="h-4 w-4" />
              Buy / Sell
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <Repeat className="h-4 w-4" />
              Swap
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <UserPlus className="h-4 w-4" />
              Refer a friend
              <Badge className="ml-auto bg-primary text-primary-foreground text-xs px-1.5 py-0">$20</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <CreditCard className="h-4 w-4" />
              Card
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <Info className="h-4 w-4" />
              Recover
              <Badge className="ml-auto bg-primary text-primary-foreground text-xs px-1.5 py-0">New</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-xs transition-all duration-200 rounded-md sidebar-button-hover">
              <Wallet className="h-4 w-4" />
              My Ledger
              <div className="ml-auto h-2 w-2 rounded-full bg-blue-500"></div>
            </Button>
          </nav>

          <div className="absolute bottom-4 left-3 right-3">
            <div className="text-xs text-muted-foreground font-semibold mb-2">STARRED ACCOUNTS</div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="bg-background lg:ml-0">
          {/* Top Bar */}
          <div className="flex h-14 items-center justify-end gap-4 px-16 lg:px-6">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => setIsReceiveModalOpen(true)}
            >
              <Download className="h-4 w-4" />
              Receive
            </Button>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center gap-2 text-sm">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Synchronized</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <Bell className="h-5 w-5 cursor-pointer" />
            <div className="h-4 w-px bg-border"></div>
            <BellOff className="h-5 w-5 cursor-pointer" />
            <div className="h-4 w-px bg-border"></div>
            <HelpCircle className="h-5 w-5 cursor-pointer" />
            <div className="h-4 w-px bg-border"></div>
            <Settings className="h-5 w-5 cursor-pointer" />
          </div>

          {/* Receive Modal */}
          <Dialog open={isReceiveModalOpen} onOpenChange={setIsReceiveModalOpen}>
            <DialogContent className="bg-card border-border max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center">Receive</DialogTitle>
              </DialogHeader>
              
              {/* Stepper */}
              <div className="flex items-center justify-center gap-4 my-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs mt-2">Recipient</span>
                </div>
                <div className="w-16 h-0.5 bg-border"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">2</span>
                  </div>
                  <span className="text-xs mt-2 text-muted-foreground">Amount</span>
                </div>
                <div className="w-16 h-0.5 bg-border"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">3</span>
                  </div>
                  <span className="text-xs mt-2 text-muted-foreground">Confirm</span>
                </div>
              </div>

              {/* Address Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Address for Ethereum</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-primary hover:text-primary/80 h-auto p-0"
                  >
                    <QrCode className="h-3 w-3 mr-1" />
                    Show QR Code
                  </Button>
                </div>

                <div className="relative">
                  <div className="bg-black/50 rounded-lg p-4 pr-10 font-mono text-xs break-all">
                    0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>

                {/* Warning Message */}
                <div className="bg-background/50 p-4 flex gap-3">
                  <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground">
                    <p className="mb-1">
                      Your Ethereum address was not confirmed on your Ledger device. Please verify it for security.
                    </p>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xs text-primary hover:text-primary/80"
                    >
                      Learn more
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {}}
                  >
                    Verify my address
                  </Button>
                  <Button
                    variant="default"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => setIsReceiveModalOpen(false)}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Notification Banner */}
          <div className="mx-6 mt-6 flex items-center justify-between px-4 py-2.5 rounded-lg" style={{ background: 'linear-gradient(to right, #6f63c0, #9b8cea)' }}>
            <div>
              <div className="font-semibold text-white">OS update available</div>
              <div className="text-sm text-white/80">Version 2.41</div>
            </div>
            <Button variant="secondary" size="sm" className="bg-white text-gray-900 hover:bg-white/90 rounded-full font-normal">
              Go to My Ledger
            </Button>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 mt-6">
            <Card className="bg-card p-4 flex flex-row items-center gap-4 cursor-pointer hover:bg-card/80 transition-colors">
              <div className="rounded-full p-2 flex-shrink-0" style={{ backgroundColor: '#303234' }}>
                <ShoppingCart className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-sm">Buy / Sell</div>
                <div className="text-xs text-muted-foreground">Buy and sell with our trusted providers</div>
              </div>
            </Card>
            <Card className="bg-card p-4 flex flex-row items-center gap-4 cursor-pointer hover:bg-card/80 transition-colors">
              <div className="rounded-full p-2 flex-shrink-0" style={{ backgroundColor: '#303234' }}>
                <Repeat className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-sm">Swap</div>
                <div className="text-xs text-muted-foreground">Convert crypto to crypto</div>
              </div>
            </Card>
            <Card className="bg-card p-4 flex flex-row items-center gap-4 cursor-pointer hover:bg-card/80 transition-colors">
              <div className="rounded-full p-2 flex-shrink-0" style={{ backgroundColor: '#303234' }}>
                <Coins className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-sm">Yield</div>
                <div className="text-xs text-muted-foreground">Get rewards on your crypto</div>
              </div>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 mt-6">
            {/* Portfolio Balance */}
            <Card className="lg:col-span-2 bg-card p-6">
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2">Portfolio balance</div>
                <div className="flex flex-col md:flex-row items-start md:justify-between gap-3 mb-6">
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold">$ ***</div>
                    <div className="flex items-center gap-1 text-red-500 text-sm">
                      <ArrowDownRight className="h-4 w-4" />
                      <span>4 % (-$***)</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Button size="sm" variant="ghost" className="text-xs border border-border rounded-[1px] bg-transparent hover:bg-transparent">1D</Button>
                    <Button size="sm" variant="ghost" className="text-xs border border-border rounded-[1px] bg-transparent hover:bg-transparent">1W</Button>
                    <Button size="sm" variant="ghost" className="text-xs border border-primary rounded-[1px] bg-transparent text-primary hover:bg-transparent">1M</Button>
                    <Button size="sm" variant="ghost" className="text-xs border border-border rounded-[1px] bg-transparent hover:bg-transparent">1Y</Button>
                    <Button size="sm" variant="ghost" className="text-xs border border-border rounded-[1px] bg-transparent hover:bg-transparent">ALL</Button>
                  </div>
                </div>
              </div>
              
              {/* Chart */}
              <div className="h-64 relative rounded-lg overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={portfolioData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#68648a" stopOpacity={0.8} />
                        <stop offset="30%" stopColor="#68648a" stopOpacity={0.4} />
                        <stop offset="60%" stopColor="#68648a" stopOpacity={0.2} />
                        <stop offset="100%" stopColor="#68648a" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid 
                      strokeDasharray="4 4" 
                      stroke="#68648a" 
                      opacity={0.3}
                      horizontal={true}
                      vertical={false}
                    />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      ticks={[
                        portfolioData[0].date,        // Dec 10
                        portfolioData[2].date,        // Dec 14
                        portfolioData[5].date,        // Dec 20
                        portfolioData[8].date,        // Dec 26
                        portfolioData[11].date,       // Jan 1
                        portfolioData[portfolioData.length - 1].date, // Jan 4
                      ]}
                    />
                    <YAxis 
                      hide={true}
                      domain={['dataMin - 5000', 'dataMax + 5000']}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#222526',
                        border: '1px solid #68648a',
                        borderRadius: '4px',
                        color: '#fff',
                        fontSize: '12px',
                      }}
                      labelStyle={{ color: '#9ca3af' }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, 'Balance']}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#68648a"
                      strokeWidth={2}
                      fill="url(#colorValue)"
                      dot={false}
                      activeDot={{ r: 4, fill: '#68648a' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* 1M Trend */}
            <Card className="bg-card p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-semibold">1M trend</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="text-xs">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    Gainers
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs text-muted-foreground">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    Losers
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { rank: 1, name: "Tokenize Xchange", symbol: "TKX", change: "106.25 %", value: "$43.83", image: "/tokenize xchange.jpg" },
                  { rank: 2, name: "Bitget Token", symbol: "BGB", change: "147.05 %", value: "$6.66", image: "/bitget.png" },
                  { rank: 3, name: "Virtuals Protocol", symbol: "VIRTUAL", change: "134.21 %", value: "$3.56", image: "/virtuals protocol.png" },
                  { rank: 4, name: "Sui", symbol: "SUI", change: "9.7 %", value: "$4.50", image: "/sui.jpeg" },
                  { rank: 5, name: "Aave", symbol: "AAVE", change: "7.99 %", value: "$292.63", image: "/aave.avif" },
                ].map((token) => (
                  <div key={token.rank} className="flex items-center gap-3">
                    <div className="text-muted-foreground text-sm w-4">{token.rank}</div>
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image
                        src={token.image}
                        alt={token.name}
                        fill
                        className="object-contain rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{token.name}</div>
                      <div className="text-xs text-muted-foreground">{token.symbol}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-green-500 flex items-center gap-1">
                        <ArrowUpRight className="h-3 w-3" />
                        {token.change}
                      </div>
                      <div className="text-xs text-muted-foreground">{token.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2">
                <Button variant="secondary" className="w-full bg-white text-gray-900 hover:bg-white/90 rounded-full font-normal">
                  Swap
                </Button>
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90 rounded-full font-normal">
                  Buy
                </Button>
              </div>
            </Card>
          </div>

          {/* Asset Allocation */}
          <div className="px-6 mt-6 pb-6">
            <Card className="bg-card p-6">
              <div className="text-sm font-semibold mb-4">Asset allocation (15)</div>
              <div className="hidden md:grid grid-cols-[1fr_1fr_2fr] gap-4 text-xs text-muted-foreground mb-2">
                <div>Asset</div>
                <div>Price</div>
                <div>Allocation</div>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Bitcoin", symbol: "BTC", price: "$0.98", allocation: 98.32, image: "/bitcoin.png" },
                  { name: "Ethereum", symbol: "ETH", price: "$3,207.59", allocation: 0.82, image: "/ethereum.png" },
                  { name: "Ripple", symbol: "XRP", price: "$2.58", allocation: 0.86, image: "/ripple.png" },
                ].map((asset, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 relative flex-shrink-0">
                        <Image
                          src={asset.image}
                          alt={asset.name}
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{asset.name}</div>
                        <div className="text-xs text-muted-foreground">{asset.symbol}</div>
                      </div>
                    </div>
                    <div className="text-sm text-foreground">{asset.price}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-foreground">{asset.allocation}%</div>
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${asset.allocation}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
