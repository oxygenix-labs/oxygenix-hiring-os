'use client';

import React from 'react';
import { Plus, Users, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const QuickActions: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="secondary"
          className="bg-white/20 hover:bg-white/30 text-white border-0 justify-start gap-2"
          onClick={() => router.push('/jobs/new')}
        >
          <Plus className="w-4 h-4" />
          Create Job
        </Button>
        <Button
          variant="secondary"
          className="bg-white/20 hover:bg-white/30 text-white border-0 justify-start gap-2"
          onClick={() => router.push('/candidates')}
        >
          <Users className="w-4 h-4" />
          View Candidates
        </Button>
        <Button
          variant="secondary"
          className="bg-white/20 hover:bg-white/30 text-white border-0 justify-start gap-2"
          onClick={() => router.push('/applications')}
        >
          <FileText className="w-4 h-4" />
          Applications
        </Button>
        <Button
          variant="secondary"
          className="bg-white/20 hover:bg-white/30 text-white border-0 justify-start gap-2"
          onClick={() => router.push('/messages')}
        >
          <Mail className="w-4 h-4" />
          Messages
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
