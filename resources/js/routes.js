export default [
    {path: '/', redirect: '/dashboard', meta: {requiresAuth: true}},
    {path: '/fresh-dashboard', redirect: '/', meta: {requiresAuth: true, backToFresh: true}},

    {
        path: '/dashboard',
        name: 'dashboard',
        component: require('./screens/dashboard').default,
        meta: {requiresAuth: true}
    },

    {
        path: '/monitoring',
        name: 'monitoring',
        component: require('./screens/monitoring/index').default,
        meta: {requiresAuth: true}
    },

    {
        path: '/monitoring/:tag',
        component: require('./screens/monitoring/tag').default,
        meta: {requiresAuth: true},
        children: [
            {
                path: 'jobs',
                name: 'monitoring-jobs',
                component: require('./screens/monitoring/tag-jobs').default,
                props: {type: 'jobs'},
            },
            {
                path: 'failed',
                name: 'monitoring-failed',
                component: require('./screens/monitoring/tag-jobs').default,
                props: {type: 'failed'},
            },
        ],
    },

    {path: '/metrics', redirect: '/metrics/jobs', meta: {requiresAuth: true}},

    {
        path: '/metrics/',
        component: require('./screens/metrics/index').default,
        meta: {requiresAuth: true},
        children: [
            {
                path: 'jobs',
                name: 'metrics-jobs',
                component: require('./screens/metrics/jobs').default,
            },
            {
                path: 'queues',
                name: 'metrics-queues',
                component: require('./screens/metrics/queues').default,
            },
        ],
    },

    {
        path: '/metrics/:type/:slug',
        name: 'metrics-preview',
        component: require('./screens/metrics/preview').default,
        meta: {requiresAuth: true}
    },

    {
        path: '/jobs/:type',
        name: 'jobs',
        component: require('./screens/recentJobs/index').default,
        meta: {requiresAuth: true}
    },

    {
        path: '/jobs/pending/:jobId',
        name: 'pending-jobs-preview',
        component: require('./screens/recentJobs/job').default,
    },

    {
        path: '/jobs/completed/:jobId',
        name: 'completed-jobs-preview',
        component: require('./screens/recentJobs/job').default,
        meta: {requiresAuth: true}
    },

    {
        path: '/failed',
        name: 'failed-jobs',
        component: require('./screens/failedJobs/index').default,
        meta: {requiresAuth: true}
    },

    {
        path: '/failed/:jobId',
        name: 'failed-jobs-preview',
        component: require('./screens/failedJobs/job').default,
        meta: {requiresAuth: true}
    },

    {
        path: '/batches',
        name: 'batches',
        component: require('./screens/batches/index').default,
    },

    {
        path: '/batches/:batchId',
        name: 'batches-preview',
        component: require('./screens/batches/preview').default,
    },
];
