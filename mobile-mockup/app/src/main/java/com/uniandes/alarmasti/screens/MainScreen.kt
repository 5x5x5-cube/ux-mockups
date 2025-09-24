package com.uniandes.alarmasti.screens

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.uniandes.alarmasti.navigation.BottomNavScreen
import com.uniandes.alarmasti.navigation.AlarmNavScreen
@Composable
fun MainScreen(rootNavController: NavHostController) {
    val bottomNavController = rememberNavController()

    Scaffold(
        bottomBar = {
            BottomNavigationBar(navController = bottomNavController)
        }
    ) { paddingValues ->
        Box(modifier = Modifier.padding(paddingValues)) {
            NavHost(
                navController = bottomNavController,
                startDestination = BottomNavScreen.Alarms.route
            ) {
                composable(BottomNavScreen.Alarms.route) {AlarmsScreen(bottomNavController, rootNavController) }
                composable(BottomNavScreen.Tasks.route) { TasksScreen(bottomNavController, rootNavController) }
                composable(BottomNavScreen.Meetings.route) { MeetingsScreen(bottomNavController, rootNavController) }
                composable(AlarmNavScreen.CreateAlarm.route) { CreateAlarmScreen(bottomNavController) }
            }
        }
    }
}


@Composable
fun BottomNavigationBar(navController: NavHostController) {
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    NavigationBar(containerColor = Color(0xFFD0CFEA)) {
        listOf(
            BottomNavScreen.Alarms,
            BottomNavScreen.Tasks,
            BottomNavScreen.Meetings
        ).forEach { screen ->
            NavigationBarItem(
                selected = currentRoute == screen.route,
                onClick = {
                    navController.navigate(screen.route) {
                        popUpTo(BottomNavScreen.Alarms.route)
                        launchSingleTop = true
                    }
                },
                icon = { Icon(screen.icon, contentDescription = screen.label) },
                label = { Text(screen.label) }
            )
        }
    }
}
