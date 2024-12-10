<script setup lang="ts">
    const response = await fetch('http://localhost:4000/dashboard', 
    {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`
        }
    })

    const data = await response.json()
</script>

<template>
    <div>
        <h1>Dashboard</h1>
        
            <pre>
                {{data}}
            </pre>
        <div>
            <h2>Habitudes globales</h2>
            <ul> 
                <li v-for="(habit, index) in data.globalHabits" :key="index">
                    {{habit.title}} : {{ habit.description}}
                </li>
            </ul>
            <h2>Habitudes personnelles</h2>
            <ul> 
                <li v-for="(habit, index) in data.personalHabits" :key="index">
                    {{habit.title}} : {{ habit.description}}
                </li>
            </ul>
        </div>
    </div>
</template>