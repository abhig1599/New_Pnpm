import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Link href="/loginas">
        
            <Button>Get Started</Button>
        </Link>
    </div>
  )
}

export default page
