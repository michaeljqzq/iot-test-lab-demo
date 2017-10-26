import React, { Component } from 'react';
import { browserHistory, Route, Router, Link } from 'react-router';
var Griddle = require('griddle-react').default;
var LocalPlugin = require('griddle-react').plugins.LocalPlugin;
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var rawHtmlString = `<body class="f-topbar-fixed">
    <div id="app-loader" class="spinner tall" style="display: none;">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>

    <!-- Top menu -->
    <div class="fixed contain-to-grid">
        <nav class="top-bar" data-topbar="" init-foundation="" data-options="is_hover: false">
            <ul class="title-area">
                <li class="name">
                    <!-- ngIf: !Session.isAuthenticated() || !Session.account().isEnterprisePlan --><h1 ng-if="!Session.isAuthenticated() || !Session.account().isEnterprisePlan" class="ng-scope"><a class="collapse-only" href="/">AppVeyor</a></h1><!-- end ngIf: !Session.isAuthenticated() || !Session.account().isEnterprisePlan -->
                    <!-- ngIf: Session.isAuthenticated() && Session.account().isEnterprisePlan -->
                </li>
                <li class="toggle-topbar menu-icon"><a href=""><span></span></a></li>
            </ul>
            
        <section class="top-bar-section">
                <!-- Left Nav -->
                <ul class="left" ng-show="Session.isAuthenticated()">
                    <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/projects">Projects</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                    <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/environments">Environments</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                    <!-- ngIf: Session.account().isEnterprisePlan -->
                    <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="http://www.appveyor.com/docs/" target="_blank">Docs</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                    <!-- ngIf: Session.account().isEnterprisePlan -->
                    <li><a href="http://www.appveyor.com/support" target="_blank">Support</a></li>
                </ul>

                <!-- Right Nav -->
                <ul class="right">
                    <li class="has-dropdown" ng-show="Session.isAuthenticated()">
                        <a class="active-user no-collapse ng-binding">
                            <img width="20" height="20" src="https://www.gravatar.com/avatar/d5b8e4e23da052f7e8c7ae43ddf20456?d=https%3a%2f%2fci.appveyor.com%2fassets%2fimages%2fuser.png&amp;s=40">
                            vschinaiot
                        </a>
                        <ul class="dropdown"><li class="title back js-generated"><h5><a href="#">Back</a></h5></li>
                            <li>
                                <label>User</label>
                            </li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/change-password">Change password</a></li>
                            <li><a href="/change-email">Change email</a></li>
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/notifications">Notifications</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/api-token">API token</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <li class="divider"></li>
                            <li>
                                <label>Account</label>
                            </li>
                            <!-- ngIf: Session.account().isEnterprisePlan -->
                            <li><a href="/account">Account details</a></li>
                            <li ng-show="Session.hasPermission('UpdateBillingDetails') &amp;&amp; !SystemSettings.onPremise" class=""><a href="/billing">Billing</a></li>
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/nuget">NuGet</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <li><a href="/team">Team</a></li>
                            <li class="divider"></li>
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope">
                                <label>Tools</label>
                            </li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/tools/encrypt">Encrypt data</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/tools/validate-yaml">Validate YAML</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <!-- ngIf: Session.hasPermission('ConfigureSystemSettings') || (Session.account().allowCustomBuildEnvironment && Session.hasPermission('ConfigureBuildEnvironment')) -->
                            <!-- ngIf: Session.hasPermission('ConfigureSystemSettings') || (Session.account().allowCustomBuildEnvironment && Session.hasPermission('ConfigureBuildEnvironment')) -->
                            <li ng-show="Session.account().allowCustomBuildEnvironment &amp;&amp; Session.hasPermission('ConfigureBuildEnvironment')" class="ng-hide"><a href="/system/build-environment">Build environment</a></li>
                            <li ng-show="Session.hasPermission('ConfigureSystemSettings')" class="ng-hide"><a href="/system/settings">Settings</a></li>
                            <li ng-show="Session.hasPermission('ConfigureSystemSettings') &amp;&amp; !SystemSettings.onPremise" class="ng-hide"><a href="/accounts">Accounts</a></li>
                            <li ng-show="Session.hasPermission('ConfigureScheduledTasks')" class="ng-hide"><a href="/schedules">Scheduled tasks</a></li>
                            <li class="divider"></li>
                            <li><a ng-click="Session.logout()">Sign out</a></li>
                        </ul>
                    </li>
                </ul>
            </section></nav>
    </div>

    <!-- Busy indicator -->

    <!-- ngIf: Session.trialExpires() !== null -->

    <!-- ngIf: Session.account().unpaid -->

    <!-- ngIf: Session.account().unverified -->
    
    <!-- ngView:  --><div ng-view="" class="ng-scope mjcss1"><div class="row ng-scope">
    <div class="large-12 columns">

        <h1 class="page-title ng-hide" ng-hide="userCanManageProjects">&nbsp;</h1>

        <!-- new project button and search box -->
        <div class="list-toolbar" ng-hide="firstLoad">
            <div class="row">
                <div class="medium-9 columns">
                    <ul class="button-group">
                        <li>
                            <a class="toolbar-button add" href="/projects/new" ng-show="userCanManageProjects"><span>New project</span></a>
                        </li>
                    </ul>
                </div>
                <div class="medium-3 columns">
                    <input type="text" ng-model="findProjectsFilter" placeholder="Find projects" ng-hide="displayWelcomeMessage" class="ng-pristine ng-valid ng-touched">
                </div>
            </div>
        </div>

        

        <div ng-show="projects | notEmpty" class="">

            <!-- Tags -->
            <ul class="horiz-nav ng-hide" ng-show="projectsPaged.tags.length > 0">
                <li><a href="/projects" ng-class="{active: !currentTag}" class="active">All</a></li>
                <!-- ngRepeat: tag in projectsPaged.tags -->
            </ul>

            <!-- Project A -->
            <!-- ngRepeat: project in projects --><div class="project-group collapsed clearfix ng-scope" ng-repeat="project in projects">
                <div class="project-group-header failed">
                    <div class="left">
                        <span class="project-name">
                            <a href="/project/vschinaiot/azure-iot-developer-kit" class="ng-binding">
                                shakeshake-sample
                                <span ng-show="project.isPrivate" class="project-moniker private ng-hide">private</span>
                            </a>
                        </span>
                        <!-- ngRepeat: tag in project.tags.split(',') --><!-- ngIf: project.tags --><!-- end ngRepeat: tag in project.tags.split(',') -->
                    </div>
                    <div class="project-toolbox right">
                        <ul>
                            <!-- ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') --><li ng-if="!project.busyId &amp;&amp; Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild')" class="ng-scope"><a ng-click="startBuild(project)" class="new-build" title="Start new build">New build</a></li><!-- end ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="#" onclick="window.mjold1();" class="history" title="Project builds history">History</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/azure-iot-developer-kit/deployments" class="deployments" title="Deployments">Deployments</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.nuGetFeed --><li ng-if="project.nuGetFeed" class="ng-scope"><a href="https://ci.appveyor.com/nuget/azure-iot-developer-kit-t26y4qr9v38k" class="nuget" title="Project NuGet feed" target="_blank">NuGet</a></li><!-- end ngIf: project.nuGetFeed -->
                            <!-- ngIf: canUpdateProjectSettings(project) --><li ng-if="canUpdateProjectSettings(project)" class="ng-scope"><a href="/project/vschinaiot/azure-iot-developer-kit/settings" class="settings" title="Edit project settings">Settings</a></li><!-- end ngIf: canUpdateProjectSettings(project) -->
                        </ul>
                    </div>
                </div>

                <!-- builds -->
                <!-- ngIf: project.builds.length > 0 --><div class="project-builds ng-scope" ng-if="project.builds.length > 0">
                    <!-- ngRepeat: build in project.builds --><div class="project-build project-build-status success" ng-repeat="build in project.builds">
                        <!-- pull request -->
                        <!-- ngIf: build.pullRequestId -->
                        <!-- Message and version -->
                        <div class="row">
                            <div class="medium-8 columns">
                                <div class="project-build-message"><a href="/project/vschinaiot/azure-iot-developer-kit/build/1.0.44" class="ng-binding">Update firmware version</a></div>
                            </div>
                            <div class="medium-4 columns">
                                <div class="project-build-version"><a href="/project/vschinaiot/azure-iot-developer-kit/build/1.0.44" title="Build version" class="ng-binding">1.0.44</a></div>
                            </div>
                        </div>
                        <!-- Author, branch, etc.-->
                        <div class="row">
                            <div class="medium-4 columns">
                                <div class="project-build-details ng-binding">
                                    &nbsp;

                                    <!-- author/committer -->
                                    <!-- ngIf: build.authorName || build.authorUsername --><span class="author ng-scope" ng-if="build.authorName || build.authorUsername">
                                        by <!-- ngIf: build.authorUsername --><a ng-if="build.authorUsername" href="https://github.com/michaeljqzq" target="_blank" class="ng-binding ng-scope">Zhiqing Qiu</a><!-- end ngIf: build.authorUsername -->
                                        <!-- ngIf: !build.authorUsername -->

                                        <!-- committer (if different from author)-->
                                        <!-- ngIf: build.committerName && build.authorName != build.committerName -->
                                    </span><!-- end ngIf: build.authorName || build.authorUsername -->
                                </div>
                            </div>
                            <div class="medium-5 columns">
                                <div class="project-build-details">
                                    <!-- ngIf: build.branch --><span class="branch ng-binding ng-scope" ng-if="build.branch" title="Branch">pre-release</span><!-- end ngIf: build.branch -->
                                    <!-- ngIf: build.tag -->
                                    <!-- ngIf: build.commitId --><a ng-if="build.commitId" href="https://github.com/Microsoft/azure-iot-developer-kit/commit/dd26f1d3376eaf115cdf26255167afe460cd096e" target="_blank" class="commitid ng-binding ng-scope" title="Commit number">dd26f1d3</a><!-- end ngIf: build.commitId -->
                                </div>
                            </div>
                            <div class="medium-3 columns">
                                <div class="project-build-state">
                                    <!-- ngIf: buildCanBeCancelled(project, build) -->
                                    <!-- ngIf: build.status == 'queued' -->
                                    <!-- ngIf: build.status == 'cancelling' -->
                                    <!-- ngIf: build.status == 'running' -->
                                    <!-- ngIf: build.status == 'success' --><div ng-if="build.status == 'success'" title="25 Oct, 2017 13:18:27 - 13:23:25" class="ng-scope">
                                        <span class="ng-binding">a day ago</span> in <span elapsed-time-since="build.started" elapsed-time-to="build.finished">4 min 58 sec</span>
                                    </div><!-- end ngIf: build.status == 'success' -->
                                    <!-- ngIf: build.status == 'failed' -->
                                    <!-- ngIf: build.status == 'cancelled' -->
                                </div>
                            </div>
                        </div>
                    </div><!-- end ngRepeat: build in project.builds -->
                </div><!-- end ngIf: project.builds.length > 0 -->
            </div><!-- end ngRepeat: project in projects --><div class="project-group collapsed clearfix ng-scope" ng-repeat="project in projects">
                <div class="project-group-header success">
                    <div class="left">
                        <span class="project-name">
                            <a href="/project/vschinaiot/raspberry-pi-web-simulator" class="ng-binding">
                                save-iothub-message-to-azure-storage
                                <span ng-show="project.isPrivate" class="project-moniker private ng-hide">private</span>
                            </a>
                        </span>
                        <!-- ngRepeat: tag in project.tags.split(',') --><!-- ngIf: project.tags --><!-- end ngRepeat: tag in project.tags.split(',') -->
                    </div>
                    <div class="project-toolbox right">
                        <ul>
                            <!-- ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') --><li ng-if="!project.busyId &amp;&amp; Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild')" class="ng-scope"><a ng-click="startBuild(project)" class="new-build" title="Start new build">New build</a></li><!-- end ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="#" onclick="window.mjold2();" class="history" title="Project builds history">History</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/raspberry-pi-web-simulator/deployments" class="deployments" title="Deployments">Deployments</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.nuGetFeed --><li ng-if="project.nuGetFeed" class="ng-scope"><a href="https://ci.appveyor.com/nuget/raspberry-pi-web-simulator-bf09qjwwr0jx" class="nuget" title="Project NuGet feed" target="_blank">NuGet</a></li><!-- end ngIf: project.nuGetFeed -->
                            <!-- ngIf: canUpdateProjectSettings(project) --><li ng-if="canUpdateProjectSettings(project)" class="ng-scope"><a href="/project/vschinaiot/raspberry-pi-web-simulator/settings" class="settings" title="Edit project settings">Settings</a></li><!-- end ngIf: canUpdateProjectSettings(project) -->
                        </ul>
                    </div>
                </div>

                <!-- builds -->
                <!-- ngIf: project.builds.length > 0 --><div class="project-builds ng-scope" ng-if="project.builds.length > 0">
                    <!-- ngRepeat: build in project.builds --><div class="project-build project-build-status success" ng-repeat="build in project.builds">
                        <!-- pull request -->
                        <!-- ngIf: build.pullRequestId -->
                        <!-- Message and version -->
                        <div class="row">
                            <div class="medium-8 columns">
                                <div class="project-build-message"><a href="/project/vschinaiot/raspberry-pi-web-simulator/build/1.0.101" class="ng-binding">Fix text indicator (#31)</a></div>
                            </div>
                            <div class="medium-4 columns">
                                <div class="project-build-version"><a href="/project/vschinaiot/raspberry-pi-web-simulator/build/1.0.101" title="Build version" class="ng-binding">1.0.101</a></div>
                            </div>
                        </div>
                        <!-- Author, branch, etc.-->
                        <div class="row">
                            <div class="medium-4 columns">
                                <div class="project-build-details ng-binding">
                                    17 days ago

                                    <!-- author/committer -->
                                    <!-- ngIf: build.authorName || build.authorUsername --><span class="author ng-scope" ng-if="build.authorName || build.authorUsername">
                                        by <!-- ngIf: build.authorUsername --><a ng-if="build.authorUsername" href="https://github.com/michaeljqzq" target="_blank" class="ng-binding ng-scope">Zhiqing Qiu</a><!-- end ngIf: build.authorUsername -->
                                        <!-- ngIf: !build.authorUsername -->

                                        <!-- committer (if different from author)-->
                                        <!-- ngIf: build.committerName && build.authorName != build.committerName --><span ng-if="build.committerName &amp;&amp; build.authorName != build.committerName" class="ng-scope">
                                            (committed by
                                            <!-- ngIf: build.committerUsername --><a ng-if="build.committerUsername" href="https://github.com/web-flow" target="_blank" class="ng-binding ng-scope">GitHub</a><!-- end ngIf: build.committerUsername --><!-- ngIf: !build.committerUsername -->)
                                        </span><!-- end ngIf: build.committerName && build.authorName != build.committerName -->
                                    </span><!-- end ngIf: build.authorName || build.authorUsername -->
                                </div>
                            </div>
                            <div class="medium-5 columns">
                                <div class="project-build-details">
                                    <!-- ngIf: build.branch --><span class="branch ng-binding ng-scope" ng-if="build.branch" title="Branch">source</span><!-- end ngIf: build.branch -->
                                    <!-- ngIf: build.tag -->
                                    <!-- ngIf: build.commitId --><a ng-if="build.commitId" href="https://github.com/Azure-Samples/raspberry-pi-web-simulator/commit/67c42761117a0da8f785f106d6666f2e2f6ce002" target="_blank" class="commitid ng-binding ng-scope" title="Commit number">67c42761</a><!-- end ngIf: build.commitId -->
                                </div>
                            </div>
                            <div class="medium-3 columns">
                                <div class="project-build-state">
                                    <!-- ngIf: buildCanBeCancelled(project, build) -->
                                    <!-- ngIf: build.status == 'queued' -->
                                    <!-- ngIf: build.status == 'cancelling' -->
                                    <!-- ngIf: build.status == 'running' -->
                                    <!-- ngIf: build.status == 'success' --><div ng-if="build.status == 'success'" title="9 Oct, 2017 16:46:47 - 16:50:19" class="ng-scope">
                                        <span class="ng-binding">17 days ago</span> in <span elapsed-time-since="build.started" elapsed-time-to="build.finished">3 min 31 sec</span>
                                    </div><!-- end ngIf: build.status == 'success' -->
                                    <!-- ngIf: build.status == 'failed' -->
                                    <!-- ngIf: build.status == 'cancelled' -->
                                </div>
                            </div>
                        </div>
                    </div><!-- end ngRepeat: build in project.builds -->
                </div><!-- end ngIf: project.builds.length > 0 -->
            </div><!-- end ngRepeat: project in projects --><div class="project-group collapsed clearfix ng-scope" ng-repeat="project in projects">
                <div class="project-group-header success">
                    <div class="left">
                        <span class="project-name">
                            <a href="/project/vschinaiot/iot-devkit-web-simulator" class="ng-binding">
                                temperature-visualization-BI
                                <span ng-show="project.isPrivate" class="project-moniker private ng-hide">private</span>
                            </a>
                        </span>
                        <!-- ngRepeat: tag in project.tags.split(',') --><!-- ngIf: project.tags --><!-- end ngRepeat: tag in project.tags.split(',') -->
                    </div>
                    <div class="project-toolbox right">
                        <ul>
                            <!-- ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') --><li ng-if="!project.busyId &amp;&amp; Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild')" class="ng-scope"><a ng-click="startBuild(project)" class="new-build" title="Start new build">New build</a></li><!-- end ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/iot-devkit-web-simulator/history" class="history" title="Project builds history">History</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/iot-devkit-web-simulator/deployments" class="deployments" title="Deployments">Deployments</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.nuGetFeed --><li ng-if="project.nuGetFeed" class="ng-scope"><a href="https://ci.appveyor.com/nuget/iot-devkit-web-simulator-l8r6hbn5rbdj" class="nuget" title="Project NuGet feed" target="_blank">NuGet</a></li><!-- end ngIf: project.nuGetFeed -->
                            <!-- ngIf: canUpdateProjectSettings(project) --><li ng-if="canUpdateProjectSettings(project)" class="ng-scope"><a href="/project/vschinaiot/iot-devkit-web-simulator/settings" class="settings" title="Edit project settings">Settings</a></li><!-- end ngIf: canUpdateProjectSettings(project) -->
                        </ul>
                    </div>
                </div>

                <!-- builds -->
                <!-- ngIf: project.builds.length > 0 --><div class="project-builds ng-scope" ng-if="project.builds.length > 0">
                    <!-- ngRepeat: build in project.builds --><div class="project-build project-build-status success" ng-repeat="build in project.builds">
                        <!-- pull request -->
                        <!-- ngIf: build.pullRequestId -->
                        <!-- Message and version -->
                        <div class="row">
                            <div class="medium-8 columns">
                                <div class="project-build-message"><a href="/project/vschinaiot/iot-devkit-web-simulator/build/1.0.21" class="ng-binding">Add a new report</a></div>
                            </div>
                            <div class="medium-4 columns">
                                <div class="project-build-version"><a href="/project/vschinaiot/iot-devkit-web-simulator/build/1.0.21" title="Build version" class="ng-binding">1.0.21</a></div>
                            </div>
                        </div>
                        <!-- Author, branch, etc.-->
                        <div class="row">
                            <div class="medium-4 columns">
                                <div class="project-build-details ng-binding">
                                    a month ago

                                    <!-- author/committer -->
                                    <!-- ngIf: build.authorName || build.authorUsername --><span class="author ng-scope" ng-if="build.authorName || build.authorUsername">
                                        by <!-- ngIf: build.authorUsername --><a ng-if="build.authorUsername" href="https://github.com/michaeljqzq" target="_blank" class="ng-binding ng-scope">Zhiqing Qiu</a><!-- end ngIf: build.authorUsername -->
                                        <!-- ngIf: !build.authorUsername -->

                                        <!-- committer (if different from author)-->
                                        <!-- ngIf: build.committerName && build.authorName != build.committerName --><span ng-if="build.committerName &amp;&amp; build.authorName != build.committerName" class="ng-scope">
                                            (committed by
                                            <!-- ngIf: build.committerUsername --><a ng-if="build.committerUsername" href="https://github.com/web-flow" target="_blank" class="ng-binding ng-scope">GitHub</a><!-- end ngIf: build.committerUsername --><!-- ngIf: !build.committerUsername -->)
                                        </span><!-- end ngIf: build.committerName && build.authorName != build.committerName -->
                                    </span><!-- end ngIf: build.authorName || build.authorUsername -->
                                </div>
                            </div>
                            <div class="medium-5 columns">
                                <div class="project-build-details">
                                    <!-- ngIf: build.branch --><span class="branch ng-binding ng-scope" ng-if="build.branch" title="Branch">source</span><!-- end ngIf: build.branch -->
                                    <!-- ngIf: build.tag -->
                                    <!-- ngIf: build.commitId --><a ng-if="build.commitId" href="https://github.com/Azure-Samples/iot-devkit-web-simulator/commit/453c07995134b61e6103c6836e068c025a08a70b" target="_blank" class="commitid ng-binding ng-scope" title="Commit number">453c0799</a><!-- end ngIf: build.commitId -->
                                </div>
                            </div>
                            <div class="medium-3 columns">
                                <div class="project-build-state">
                                    <!-- ngIf: buildCanBeCancelled(project, build) -->
                                    <!-- ngIf: build.status == 'queued' -->
                                    <!-- ngIf: build.status == 'cancelling' -->
                                    <!-- ngIf: build.status == 'running' -->
                                    <!-- ngIf: build.status == 'success' --><div ng-if="build.status == 'success'" title="18 Sep, 2017 14:54:52 - 14:57:58" class="ng-scope">
                                        <span class="ng-binding">a month ago</span> in <span elapsed-time-since="build.started" elapsed-time-to="build.finished">3 min 5 sec</span>
                                    </div><!-- end ngIf: build.status == 'success' -->
                                    <!-- ngIf: build.status == 'failed' -->
                                    <!-- ngIf: build.status == 'cancelled' -->
                                </div>
                            </div>
                        </div>
                    </div><!-- end ngRepeat: build in project.builds -->
                </div><!-- end ngIf: project.builds.length > 0 -->
            </div><!-- end ngRepeat: project in projects --><div class="project-group collapsed clearfix ng-scope" ng-repeat="project in projects">
                <div class="project-group-header success">
                    <div class="left">
                        <span class="project-name">
                            <a href="/project/vschinaiot/azure-iot-toolkit-for-mobile" class="ng-binding">
                                temperature-visualization-webapp
                                <span ng-show="project.isPrivate" class="project-moniker private ng-hide">private</span>
                            </a>
                        </span>
                        <!-- ngRepeat: tag in project.tags.split(',') --><!-- ngIf: project.tags --><!-- end ngRepeat: tag in project.tags.split(',') -->
                    </div>
                    <div class="project-toolbox right">
                        <ul>
                            <!-- ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') --><li ng-if="!project.busyId &amp;&amp; Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild')" class="ng-scope"><a ng-click="startBuild(project)" class="new-build" title="Start new build">New build</a></li><!-- end ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/azure-iot-toolkit-for-mobile/history" class="history" title="Project builds history">History</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/azure-iot-toolkit-for-mobile/deployments" class="deployments" title="Deployments">Deployments</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.nuGetFeed --><li ng-if="project.nuGetFeed" class="ng-scope"><a href="https://ci.appveyor.com/nuget/azure-iot-toolkit-for-mobile-2kf5ifqvg6hm" class="nuget" title="Project NuGet feed" target="_blank">NuGet</a></li><!-- end ngIf: project.nuGetFeed -->
                            <!-- ngIf: canUpdateProjectSettings(project) --><li ng-if="canUpdateProjectSettings(project)" class="ng-scope"><a href="/project/vschinaiot/azure-iot-toolkit-for-mobile/settings" class="settings" title="Edit project settings">Settings</a></li><!-- end ngIf: canUpdateProjectSettings(project) -->
                        </ul>
                    </div>
                </div>

                <!-- builds -->
                <!-- ngIf: project.builds.length > 0 --><div class="project-builds ng-scope" ng-if="project.builds.length > 0">
                    <!-- ngRepeat: build in project.builds --><div class="project-build project-build-status success" ng-repeat="build in project.builds">
                        <!-- pull request -->
                        <!-- ngIf: build.pullRequestId -->
                        <!-- Message and version -->
                        <div class="row">
                            <div class="medium-8 columns">
                                <div class="project-build-message"><a href="/project/vschinaiot/azure-iot-toolkit-for-mobile/build/1.0.89" class="ng-binding">update package.json</a></div>
                            </div>
                            <div class="medium-4 columns">
                                <div class="project-build-version"><a href="/project/vschinaiot/azure-iot-toolkit-for-mobile/build/1.0.89" title="Build version" class="ng-binding">1.0.89</a></div>
                            </div>
                        </div>
                        <!-- Author, branch, etc.-->
                        <div class="row">
                            <div class="medium-4 columns">
                                <div class="project-build-details ng-binding">
                                    2 months ago

                                    <!-- author/committer -->
                                    <!-- ngIf: build.authorName || build.authorUsername --><span class="author ng-scope" ng-if="build.authorName || build.authorUsername">
                                        by <!-- ngIf: build.authorUsername --><a ng-if="build.authorUsername" href="https://github.com/ChenTanyi" target="_blank" class="ng-binding ng-scope">Xin Shi</a><!-- end ngIf: build.authorUsername -->
                                        <!-- ngIf: !build.authorUsername -->

                                        <!-- committer (if different from author)-->
                                        <!-- ngIf: build.committerName && build.authorName != build.committerName --><span ng-if="build.committerName &amp;&amp; build.authorName != build.committerName" class="ng-scope">
                                            (committed by
                                            <!-- ngIf: build.committerUsername --><a ng-if="build.committerUsername" href="https://github.com/web-flow" target="_blank" class="ng-binding ng-scope">GitHub</a><!-- end ngIf: build.committerUsername --><!-- ngIf: !build.committerUsername -->)
                                        </span><!-- end ngIf: build.committerName && build.authorName != build.committerName -->
                                    </span><!-- end ngIf: build.authorName || build.authorUsername -->
                                </div>
                            </div>
                            <div class="medium-5 columns">
                                <div class="project-build-details">
                                    <!-- ngIf: build.branch --><span class="branch ng-binding ng-scope" ng-if="build.branch" title="Branch">master</span><!-- end ngIf: build.branch -->
                                    <!-- ngIf: build.tag -->
                                    <!-- ngIf: build.commitId --><a ng-if="build.commitId" href="https://github.com/VSChina/azure-iot-toolkit-for-mobile/commit/f7e53abb16188abb4d274c82c2464f93b1ff5fd7" target="_blank" class="commitid ng-binding ng-scope" title="Commit number">f7e53abb</a><!-- end ngIf: build.commitId -->
                                </div>
                            </div>
                            <div class="medium-3 columns">
                                <div class="project-build-state">
                                    <!-- ngIf: buildCanBeCancelled(project, build) -->
                                    <!-- ngIf: build.status == 'queued' -->
                                    <!-- ngIf: build.status == 'cancelling' -->
                                    <!-- ngIf: build.status == 'running' -->
                                    <!-- ngIf: build.status == 'success' --><div ng-if="build.status == 'success'" title="28 Aug, 2017 12:10:03 - 12:12:46" class="ng-scope">
                                        <span class="ng-binding">2 months ago</span> in <span elapsed-time-since="build.started" elapsed-time-to="build.finished">2 min 43 sec</span>
                                    </div><!-- end ngIf: build.status == 'success' -->
                                    <!-- ngIf: build.status == 'failed' -->
                                    <!-- ngIf: build.status == 'cancelled' -->
                                </div>
                            </div>
                        </div>
                    </div><!-- end ngRepeat: build in project.builds -->
                </div><!-- end ngIf: project.builds.length > 0 -->
            </div><!-- end ngRepeat: project in projects --><div class="project-group collapsed clearfix ng-scope" ng-repeat="project in projects">
                <div class="project-group-header success">
                    <div class="left">
                        <span class="project-name">
                            <a href="/project/vschinaiot/azure-iot-diagnostics-portal" class="ng-binding">
                                weather-forecasting-machine-learning
                                <span ng-show="project.isPrivate" class="project-moniker private ng-hide">private</span>
                            </a>
                        </span>
                        <!-- ngRepeat: tag in project.tags.split(',') --><!-- ngIf: project.tags --><!-- end ngRepeat: tag in project.tags.split(',') -->
                    </div>
                    <div class="project-toolbox right">
                        <ul>
                            <!-- ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') --><li ng-if="!project.busyId &amp;&amp; Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild')" class="ng-scope"><a ng-click="startBuild(project)" class="new-build" title="Start new build">New build</a></li><!-- end ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/azure-iot-diagnostics-portal/history" class="history" title="Project builds history">History</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/azure-iot-diagnostics-portal/deployments" class="deployments" title="Deployments">Deployments</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.nuGetFeed --><li ng-if="project.nuGetFeed" class="ng-scope"><a href="https://ci.appveyor.com/nuget/azure-iot-diagnostics-portal-ojdb243lljmg" class="nuget" title="Project NuGet feed" target="_blank">NuGet</a></li><!-- end ngIf: project.nuGetFeed -->
                            <!-- ngIf: canUpdateProjectSettings(project) --><li ng-if="canUpdateProjectSettings(project)" class="ng-scope"><a href="/project/vschinaiot/azure-iot-diagnostics-portal/settings" class="settings" title="Edit project settings">Settings</a></li><!-- end ngIf: canUpdateProjectSettings(project) -->
                        </ul>
                    </div>
                </div>

                <!-- builds -->
                <!-- ngIf: project.builds.length > 0 --><div class="project-builds ng-scope" ng-if="project.builds.length > 0">
                    <!-- ngRepeat: build in project.builds --><div class="project-build project-build-status success" ng-repeat="build in project.builds">
                        <!-- pull request -->
                        <!-- ngIf: build.pullRequestId -->
                        <!-- Message and version -->
                        <div class="row">
                            <div class="medium-8 columns">
                                <div class="project-build-message"><a href="/project/vschinaiot/azure-iot-diagnostics-portal/build/1.0.66" class="ng-binding">Adjust ML curve.</a></div>
                            </div>
                            <div class="medium-4 columns">
                                <div class="project-build-version"><a href="/project/vschinaiot/azure-iot-diagnostics-portal/build/1.0.66" title="Build version" class="ng-binding">1.0.66</a></div>
                            </div>
                        </div>
                        <!-- Author, branch, etc.-->
                        <div class="row">
                            <div class="medium-4 columns">
                                <div class="project-build-details ng-binding">
                                    3 months ago

                                    <!-- author/committer -->
                                    <!-- ngIf: build.authorName || build.authorUsername --><span class="author ng-scope" ng-if="build.authorName || build.authorUsername">
                                        by <!-- ngIf: build.authorUsername -->
                                        <!-- ngIf: !build.authorUsername --><span ng-if="!build.authorUsername" class="ng-binding ng-scope">Zhiqing Qiu</span><!-- end ngIf: !build.authorUsername -->

                                        <!-- committer (if different from author)-->
                                        <!-- ngIf: build.committerName && build.authorName != build.committerName -->
                                    </span><!-- end ngIf: build.authorName || build.authorUsername -->
                                </div>
                            </div>
                            <div class="medium-5 columns">
                                <div class="project-build-details">
                                    <!-- ngIf: build.branch --><span class="branch ng-binding ng-scope" ng-if="build.branch" title="Branch">master</span><!-- end ngIf: build.branch -->
                                    <!-- ngIf: build.tag -->
                                    <!-- ngIf: build.commitId --><a ng-if="build.commitId" href="https://github.com/VSChina/azure-iot-diagnostics-portal/commit/a200c0819dce1d06d215ec6ce46657b30a56c6dd" target="_blank" class="commitid ng-binding ng-scope" title="Commit number">a200c081</a><!-- end ngIf: build.commitId -->
                                </div>
                            </div>
                            <div class="medium-3 columns">
                                <div class="project-build-state">
                                    <!-- ngIf: buildCanBeCancelled(project, build) -->
                                    <!-- ngIf: build.status == 'queued' -->
                                    <!-- ngIf: build.status == 'cancelling' -->
                                    <!-- ngIf: build.status == 'running' -->
                                    <!-- ngIf: build.status == 'success' --><div ng-if="build.status == 'success'" title="17 Jul, 2017 16:55:06 - 16:56:29" class="ng-scope">
                                        <span class="ng-binding">3 months ago</span> in <span elapsed-time-since="build.started" elapsed-time-to="build.finished">1 min 22 sec</span>
                                    </div><!-- end ngIf: build.status == 'success' -->
                                    <!-- ngIf: build.status == 'failed' -->
                                    <!-- ngIf: build.status == 'cancelled' -->
                                </div>
                            </div>
                        </div>
                    </div><!-- end ngRepeat: build in project.builds -->
                </div><!-- end ngIf: project.builds.length > 0 -->
            </div><!-- end ngRepeat: project in projects -->

            <div class="pagination-centered ng-hide" ng-show="pages.length > 1">
                <ul class="pagination">
                    <!-- ngRepeat: page in pages --><li ng-repeat="page in pages" ng-class="{current: page.current}" class="ng-scope current">
                        <a href="/projects" class="ng-binding">1</a>
                    </li><!-- end ngRepeat: page in pages -->
                </ul>
            </div>
        </div>
    </div>
</div></div>
     
    <script src="/dist/app-5b1f9f8ba2.min.js"></script>

    
    <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
    <script src="/signalr/hubs"></script>
    <script>
        var analyticsTrackingId = "UA-32029905-2";
        var recaptchaPublicKey = "6LfsXhgUAAAAAJzEJ9ZpnKQlkkPD-kiErGOWaRol";
    </script>
    <script>
        Stripe.setPublishableKey("pk_live_ocExFvIl1PhmY5lbVMtWyZlJ");
    </script>

<iframe name="stripeXDM_default867129_provider" id="stripeXDM_default867129_provider" aria-hidden="true" src="https://js.stripe.com/v2/channel.html?stripe_xdm_e=https%3A%2F%2Fci.appveyor.com&amp;stripe_xdm_c=default867129&amp;stripe_xdm_p=1#__stripe_transport__" frameborder="0" style="position: absolute; top: -2000px; left: 0px;"></iframe><iframe src="https://js.stripe.com/v2/m/outer.html#referrer=https%3A%2F%2Fwww.appveyor.com%2F&amp;title=AppVeyor&amp;url=https%3A%2F%2Fci.appveyor.com%2F&amp;muid=2d92d65a-cf89-4d57-89a3-0b3cbc01bf31&amp;sid=30547104-e2ca-4ba2-8f86-2e119559e8e5&amp;preview=false&amp;" frameborder="0" allowtransparency="true" scrolling="no" tabindex="-1" aria-hidden="true" style="width: 1px !important; height: 1px !important; position: fixed !important; visibility: hidden !important; pointer-events: none !important;"></iframe></body>`;

var rawHtmlString2 = `<body class="f-topbar-fixed">
    <div id="app-loader" class="spinner tall" style="display: none;">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>

    <!-- Top menu -->
    <div class="fixed contain-to-grid">
        <nav class="top-bar" data-topbar="" init-foundation="" data-options="is_hover: false">
            <ul class="title-area">
                <li class="name">
                    <!-- ngIf: !Session.isAuthenticated() || !Session.account().isEnterprisePlan --><h1 ng-if="!Session.isAuthenticated() || !Session.account().isEnterprisePlan" class="ng-scope"><a class="collapse-only" href="/">AppVeyor</a></h1><!-- end ngIf: !Session.isAuthenticated() || !Session.account().isEnterprisePlan -->
                    <!-- ngIf: Session.isAuthenticated() && Session.account().isEnterprisePlan -->
                </li>
                <li class="toggle-topbar menu-icon"><a href=""><span></span></a></li>
            </ul>
            
        <section class="top-bar-section">
                <!-- Left Nav -->
                <ul class="left" ng-show="Session.isAuthenticated()">
                    <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/projects">Projects</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                    <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/environments">Environments</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                    <!-- ngIf: Session.account().isEnterprisePlan -->
                    <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="http://www.appveyor.com/docs/" target="_blank">Docs</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                    <!-- ngIf: Session.account().isEnterprisePlan -->
                    <li><a href="http://www.appveyor.com/support" target="_blank">Support</a></li>
                </ul>

                <!-- Right Nav -->
                <ul class="right">
                    <li class="has-dropdown" ng-show="Session.isAuthenticated()">
                        <a class="active-user no-collapse ng-binding">
                            <img width="20" height="20" src="https://www.gravatar.com/avatar/d5b8e4e23da052f7e8c7ae43ddf20456?d=https%3a%2f%2fci.appveyor.com%2fassets%2fimages%2fuser.png&amp;s=40">
                            vschinaiot
                        </a>
                        <ul class="dropdown"><li class="title back js-generated"><h5><a href="#">Back</a></h5></li>
                            <li>
                                <label>User</label>
                            </li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/change-password">Change password</a></li>
                            <li><a href="/change-email">Change email</a></li>
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/notifications">Notifications</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/api-token">API token</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <li class="divider"></li>
                            <li>
                                <label>Account</label>
                            </li>
                            <!-- ngIf: Session.account().isEnterprisePlan -->
                            <li><a href="/account">Account details</a></li>
                            <li ng-show="Session.hasPermission('UpdateBillingDetails') &amp;&amp; !SystemSettings.onPremise" class=""><a href="/billing">Billing</a></li>
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/nuget">NuGet</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <li><a href="/team">Team</a></li>
                            <li class="divider"></li>
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope">
                                <label>Tools</label>
                            </li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/tools/encrypt">Encrypt data</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <!-- ngIf: !Session.account().isEnterprisePlan --><li ng-if="!Session.account().isEnterprisePlan" class="ng-scope"><a href="/tools/validate-yaml">Validate YAML</a></li><!-- end ngIf: !Session.account().isEnterprisePlan -->
                            <!-- ngIf: Session.hasPermission('ConfigureSystemSettings') || (Session.account().allowCustomBuildEnvironment && Session.hasPermission('ConfigureBuildEnvironment')) -->
                            <!-- ngIf: Session.hasPermission('ConfigureSystemSettings') || (Session.account().allowCustomBuildEnvironment && Session.hasPermission('ConfigureBuildEnvironment')) -->
                            <li ng-show="Session.account().allowCustomBuildEnvironment &amp;&amp; Session.hasPermission('ConfigureBuildEnvironment')" class="ng-hide"><a href="/system/build-environment">Build environment</a></li>
                            <li ng-show="Session.hasPermission('ConfigureSystemSettings')" class="ng-hide"><a href="/system/settings">Settings</a></li>
                            <li ng-show="Session.hasPermission('ConfigureSystemSettings') &amp;&amp; !SystemSettings.onPremise" class="ng-hide"><a href="/accounts">Accounts</a></li>
                            <li ng-show="Session.hasPermission('ConfigureScheduledTasks')" class="ng-hide"><a href="/schedules">Scheduled tasks</a></li>
                            <li class="divider"></li>
                            <li><a ng-click="Session.logout()">Sign out</a></li>
                        </ul>
                    </li>
                </ul>
            </section></nav>
    </div>

    <!-- Busy indicator -->

    <!-- ngIf: Session.trialExpires() !== null -->

    <!-- ngIf: Session.account().unpaid -->

    <!-- ngIf: Session.account().unverified -->
    
    <!-- ngView:  --><div ng-view="" class="ng-scope mjcss1"><div class="row ng-scope">
    <div class="large-12 columns">

        <h1 class="page-title ng-hide" ng-hide="userCanManageProjects">&nbsp;</h1>

        <!-- new project button and search box -->
        <div class="list-toolbar" ng-hide="firstLoad">
            <div class="row">
                <div class="medium-9 columns">
                    <ul class="button-group">
                        <li>
                            <a class="toolbar-button add" href="/projects/new" ng-show="userCanManageProjects"><span>New project</span></a>
                        </li>
                    </ul>
                </div>
                <div class="medium-3 columns">
                    <input type="text" ng-model="findProjectsFilter" placeholder="Find projects" ng-hide="displayWelcomeMessage" class="ng-pristine ng-valid ng-touched">
                </div>
            </div>
        </div>

        

        <div ng-show="projects | notEmpty" class="">

            <!-- Tags -->
            <ul class="horiz-nav ng-hide" ng-show="projectsPaged.tags.length > 0">
                <li><a href="/projects" ng-class="{active: !currentTag}" class="active">All</a></li>
                <!-- ngRepeat: tag in projectsPaged.tags -->
            </ul>

            <!-- Project A -->
            <!-- ngRepeat: project in projects --><div class="project-group collapsed clearfix ng-scope" ng-repeat="project in projects">
                <div class="project-group-header success">
                    <div class="left">
                        <span class="project-name">
                            <a href="/project/vschinaiot/azure-iot-developer-kit" class="ng-binding">
                                shakeshake-sample
                                <span ng-show="project.isPrivate" class="project-moniker private ng-hide">private</span>
                            </a>
                        </span>
                        <!-- ngRepeat: tag in project.tags.split(',') --><!-- ngIf: project.tags --><!-- end ngRepeat: tag in project.tags.split(',') -->
                    </div>
                    <div class="project-toolbox right">
                        <ul>
                            <!-- ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') --><li ng-if="!project.busyId &amp;&amp; Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild')" class="ng-scope"><a ng-click="startBuild(project)" class="new-build" title="Start new build">New build</a></li><!-- end ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="#" onclick="window.mjNew1();" class="history" title="Project builds history">History</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/azure-iot-developer-kit/deployments" class="deployments" title="Deployments">Deployments</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.nuGetFeed --><li ng-if="project.nuGetFeed" class="ng-scope"><a href="https://ci.appveyor.com/nuget/azure-iot-developer-kit-t26y4qr9v38k" class="nuget" title="Project NuGet feed" target="_blank">NuGet</a></li><!-- end ngIf: project.nuGetFeed -->
                            <!-- ngIf: canUpdateProjectSettings(project) --><li ng-if="canUpdateProjectSettings(project)" class="ng-scope"><a href="/project/vschinaiot/azure-iot-developer-kit/settings" class="settings" title="Edit project settings">Settings</a></li><!-- end ngIf: canUpdateProjectSettings(project) -->
                        </ul>
                    </div>
                </div>

                <!-- builds -->
                <!-- ngIf: project.builds.length > 0 --><div class="project-builds ng-scope" ng-if="project.builds.length > 0">
                    <!-- ngRepeat: build in project.builds --><div class="project-build project-build-status success" ng-repeat="build in project.builds">
                        <!-- pull request -->
                        <!-- ngIf: build.pullRequestId -->
                        <!-- Message and version -->
                        <div class="row">
                            <div class="medium-8 columns">
                                <div class="project-build-message"><a href="/project/vschinaiot/azure-iot-developer-kit/build/1.0.44" class="ng-binding">Update firmware version</a></div>
                            </div>
                            <div class="medium-4 columns">
                                <div class="project-build-version"><a href="/project/vschinaiot/azure-iot-developer-kit/build/1.0.44" title="Build version" class="ng-binding">1.0.45</a></div>
                            </div>
                        </div>
                        <!-- Author, branch, etc.-->
                        <div class="row">
                            <div class="medium-4 columns">
                                <div class="project-build-details ng-binding">
                                    &nbsp;

                                    <!-- author/committer -->
                                    <!-- ngIf: build.authorName || build.authorUsername --><span class="author ng-scope" ng-if="build.authorName || build.authorUsername">
                                        by <!-- ngIf: build.authorUsername --><a ng-if="build.authorUsername" href="https://github.com/ArthurMa1978" target="_blank" class="ng-binding ng-scope">Zhiqing Qiu</a><!-- end ngIf: build.authorUsername -->
                                        <!-- ngIf: !build.authorUsername -->

                                        <!-- committer (if different from author)-->
                                        <!-- ngIf: build.committerName && build.authorName != build.committerName -->
                                    </span><!-- end ngIf: build.authorName || build.authorUsername -->
                                </div>
                            </div>
                            <div class="medium-5 columns">
                                <div class="project-build-details">
                                    <!-- ngIf: build.branch --><span class="branch ng-binding ng-scope" ng-if="build.branch" title="Branch">pre-release</span><!-- end ngIf: build.branch -->
                                    <!-- ngIf: build.tag -->
                                    <!-- ngIf: build.commitId --><a ng-if="build.commitId" href="https://github.com/Microsoft/azure-iot-developer-kit/commit/dd26f1d3376eaf115cdf26255167afe460cd096e" target="_blank" class="commitid ng-binding ng-scope" title="Commit number">dd26f1d3</a><!-- end ngIf: build.commitId -->
                                </div>
                            </div>
                            <div class="medium-3 columns">
                                <div class="project-build-state">
                                    <!-- ngIf: buildCanBeCancelled(project, build) -->
                                    <!-- ngIf: build.status == 'queued' -->
                                    <!-- ngIf: build.status == 'cancelling' -->
                                    <!-- ngIf: build.status == 'running' -->
                                    <!-- ngIf: build.status == 'success' --><div ng-if="build.status == 'success'" title="25 Oct, 2017 13:18:27 - 13:23:25" class="ng-scope">
                                        <span class="ng-binding"></span>  <span elapsed-time-since="build.started" elapsed-time-to="build.finished">just now</span>
                                    </div><!-- end ngIf: build.status == 'success' -->
                                    <!-- ngIf: build.status == 'failed' -->
                                    <!-- ngIf: build.status == 'cancelled' -->
                                </div>
                            </div>
                        </div>
                    </div><!-- end ngRepeat: build in project.builds -->
                </div><!-- end ngIf: project.builds.length > 0 -->
            </div><!-- end ngRepeat: project in projects --><div class="project-group collapsed clearfix ng-scope" ng-repeat="project in projects">
                <div class="project-group-header success">
                    <div class="left">
                        <span class="project-name">
                            <a href="/project/vschinaiot/raspberry-pi-web-simulator" class="ng-binding">
                                save-iothub-message-to-azure-storage
                                <span ng-show="project.isPrivate" class="project-moniker private ng-hide">private</span>
                            </a>
                        </span>
                        <!-- ngRepeat: tag in project.tags.split(',') --><!-- ngIf: project.tags --><!-- end ngRepeat: tag in project.tags.split(',') -->
                    </div>
                    <div class="project-toolbox right">
                        <ul>
                            <!-- ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') --><li ng-if="!project.busyId &amp;&amp; Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild')" class="ng-scope"><a ng-click="startBuild(project)" class="new-build" title="Start new build">New build</a></li><!-- end ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="#" onclick="window.mjold2();" class="history" title="Project builds history">History</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/raspberry-pi-web-simulator/deployments" class="deployments" title="Deployments">Deployments</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.nuGetFeed --><li ng-if="project.nuGetFeed" class="ng-scope"><a href="https://ci.appveyor.com/nuget/raspberry-pi-web-simulator-bf09qjwwr0jx" class="nuget" title="Project NuGet feed" target="_blank">NuGet</a></li><!-- end ngIf: project.nuGetFeed -->
                            <!-- ngIf: canUpdateProjectSettings(project) --><li ng-if="canUpdateProjectSettings(project)" class="ng-scope"><a href="/project/vschinaiot/raspberry-pi-web-simulator/settings" class="settings" title="Edit project settings">Settings</a></li><!-- end ngIf: canUpdateProjectSettings(project) -->
                        </ul>
                    </div>
                </div>

                <!-- builds -->
                <!-- ngIf: project.builds.length > 0 --><div class="project-builds ng-scope" ng-if="project.builds.length > 0">
                    <!-- ngRepeat: build in project.builds --><div class="project-build project-build-status success" ng-repeat="build in project.builds">
                        <!-- pull request -->
                        <!-- ngIf: build.pullRequestId -->
                        <!-- Message and version -->
                        <div class="row">
                            <div class="medium-8 columns">
                                <div class="project-build-message"><a href="/project/vschinaiot/raspberry-pi-web-simulator/build/1.0.101" class="ng-binding">Fix text indicator (#31)</a></div>
                            </div>
                            <div class="medium-4 columns">
                                <div class="project-build-version"><a href="/project/vschinaiot/raspberry-pi-web-simulator/build/1.0.101" title="Build version" class="ng-binding">1.0.101</a></div>
                            </div>
                        </div>
                        <!-- Author, branch, etc.-->
                        <div class="row">
                            <div class="medium-4 columns">
                                <div class="project-build-details ng-binding">
                                    17 days ago

                                    <!-- author/committer -->
                                    <!-- ngIf: build.authorName || build.authorUsername --><span class="author ng-scope" ng-if="build.authorName || build.authorUsername">
                                        by <!-- ngIf: build.authorUsername --><a ng-if="build.authorUsername" href="https://github.com/michaeljqzq" target="_blank" class="ng-binding ng-scope">Zhiqing Qiu</a><!-- end ngIf: build.authorUsername -->
                                        <!-- ngIf: !build.authorUsername -->

                                        <!-- committer (if different from author)-->
                                        <!-- ngIf: build.committerName && build.authorName != build.committerName --><span ng-if="build.committerName &amp;&amp; build.authorName != build.committerName" class="ng-scope">
                                            (committed by
                                            <!-- ngIf: build.committerUsername --><a ng-if="build.committerUsername" href="https://github.com/web-flow" target="_blank" class="ng-binding ng-scope">GitHub</a><!-- end ngIf: build.committerUsername --><!-- ngIf: !build.committerUsername -->)
                                        </span><!-- end ngIf: build.committerName && build.authorName != build.committerName -->
                                    </span><!-- end ngIf: build.authorName || build.authorUsername -->
                                </div>
                            </div>
                            <div class="medium-5 columns">
                                <div class="project-build-details">
                                    <!-- ngIf: build.branch --><span class="branch ng-binding ng-scope" ng-if="build.branch" title="Branch">source</span><!-- end ngIf: build.branch -->
                                    <!-- ngIf: build.tag -->
                                    <!-- ngIf: build.commitId --><a ng-if="build.commitId" href="https://github.com/Azure-Samples/raspberry-pi-web-simulator/commit/67c42761117a0da8f785f106d6666f2e2f6ce002" target="_blank" class="commitid ng-binding ng-scope" title="Commit number">67c42761</a><!-- end ngIf: build.commitId -->
                                </div>
                            </div>
                            <div class="medium-3 columns">
                                <div class="project-build-state">
                                    <!-- ngIf: buildCanBeCancelled(project, build) -->
                                    <!-- ngIf: build.status == 'queued' -->
                                    <!-- ngIf: build.status == 'cancelling' -->
                                    <!-- ngIf: build.status == 'running' -->
                                    <!-- ngIf: build.status == 'success' --><div ng-if="build.status == 'success'" title="9 Oct, 2017 16:46:47 - 16:50:19" class="ng-scope">
                                        <span class="ng-binding">17 days ago</span> in <span elapsed-time-since="build.started" elapsed-time-to="build.finished">3 min 31 sec</span>
                                    </div><!-- end ngIf: build.status == 'success' -->
                                    <!-- ngIf: build.status == 'failed' -->
                                    <!-- ngIf: build.status == 'cancelled' -->
                                </div>
                            </div>
                        </div>
                    </div><!-- end ngRepeat: build in project.builds -->
                </div><!-- end ngIf: project.builds.length > 0 -->
            </div><!-- end ngRepeat: project in projects --><div class="project-group collapsed clearfix ng-scope" ng-repeat="project in projects">
                <div class="project-group-header success">
                    <div class="left">
                        <span class="project-name">
                            <a href="/project/vschinaiot/iot-devkit-web-simulator" class="ng-binding">
                                temperature-visualization-BI
                                <span ng-show="project.isPrivate" class="project-moniker private ng-hide">private</span>
                            </a>
                        </span>
                        <!-- ngRepeat: tag in project.tags.split(',') --><!-- ngIf: project.tags --><!-- end ngRepeat: tag in project.tags.split(',') -->
                    </div>
                    <div class="project-toolbox right">
                        <ul>
                            <!-- ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') --><li ng-if="!project.busyId &amp;&amp; Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild')" class="ng-scope"><a ng-click="startBuild(project)" class="new-build" title="Start new build">New build</a></li><!-- end ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/iot-devkit-web-simulator/history" class="history" title="Project builds history">History</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/iot-devkit-web-simulator/deployments" class="deployments" title="Deployments">Deployments</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.nuGetFeed --><li ng-if="project.nuGetFeed" class="ng-scope"><a href="https://ci.appveyor.com/nuget/iot-devkit-web-simulator-l8r6hbn5rbdj" class="nuget" title="Project NuGet feed" target="_blank">NuGet</a></li><!-- end ngIf: project.nuGetFeed -->
                            <!-- ngIf: canUpdateProjectSettings(project) --><li ng-if="canUpdateProjectSettings(project)" class="ng-scope"><a href="/project/vschinaiot/iot-devkit-web-simulator/settings" class="settings" title="Edit project settings">Settings</a></li><!-- end ngIf: canUpdateProjectSettings(project) -->
                        </ul>
                    </div>
                </div>

                <!-- builds -->
                <!-- ngIf: project.builds.length > 0 --><div class="project-builds ng-scope" ng-if="project.builds.length > 0">
                    <!-- ngRepeat: build in project.builds --><div class="project-build project-build-status success" ng-repeat="build in project.builds">
                        <!-- pull request -->
                        <!-- ngIf: build.pullRequestId -->
                        <!-- Message and version -->
                        <div class="row">
                            <div class="medium-8 columns">
                                <div class="project-build-message"><a href="/project/vschinaiot/iot-devkit-web-simulator/build/1.0.21" class="ng-binding">Add a new report</a></div>
                            </div>
                            <div class="medium-4 columns">
                                <div class="project-build-version"><a href="/project/vschinaiot/iot-devkit-web-simulator/build/1.0.21" title="Build version" class="ng-binding">1.0.21</a></div>
                            </div>
                        </div>
                        <!-- Author, branch, etc.-->
                        <div class="row">
                            <div class="medium-4 columns">
                                <div class="project-build-details ng-binding">
                                    a month ago

                                    <!-- author/committer -->
                                    <!-- ngIf: build.authorName || build.authorUsername --><span class="author ng-scope" ng-if="build.authorName || build.authorUsername">
                                        by <!-- ngIf: build.authorUsername --><a ng-if="build.authorUsername" href="https://github.com/michaeljqzq" target="_blank" class="ng-binding ng-scope">Zhiqing Qiu</a><!-- end ngIf: build.authorUsername -->
                                        <!-- ngIf: !build.authorUsername -->

                                        <!-- committer (if different from author)-->
                                        <!-- ngIf: build.committerName && build.authorName != build.committerName --><span ng-if="build.committerName &amp;&amp; build.authorName != build.committerName" class="ng-scope">
                                            (committed by
                                            <!-- ngIf: build.committerUsername --><a ng-if="build.committerUsername" href="https://github.com/web-flow" target="_blank" class="ng-binding ng-scope">GitHub</a><!-- end ngIf: build.committerUsername --><!-- ngIf: !build.committerUsername -->)
                                        </span><!-- end ngIf: build.committerName && build.authorName != build.committerName -->
                                    </span><!-- end ngIf: build.authorName || build.authorUsername -->
                                </div>
                            </div>
                            <div class="medium-5 columns">
                                <div class="project-build-details">
                                    <!-- ngIf: build.branch --><span class="branch ng-binding ng-scope" ng-if="build.branch" title="Branch">source</span><!-- end ngIf: build.branch -->
                                    <!-- ngIf: build.tag -->
                                    <!-- ngIf: build.commitId --><a ng-if="build.commitId" href="https://github.com/Azure-Samples/iot-devkit-web-simulator/commit/453c07995134b61e6103c6836e068c025a08a70b" target="_blank" class="commitid ng-binding ng-scope" title="Commit number">453c0799</a><!-- end ngIf: build.commitId -->
                                </div>
                            </div>
                            <div class="medium-3 columns">
                                <div class="project-build-state">
                                    <!-- ngIf: buildCanBeCancelled(project, build) -->
                                    <!-- ngIf: build.status == 'queued' -->
                                    <!-- ngIf: build.status == 'cancelling' -->
                                    <!-- ngIf: build.status == 'running' -->
                                    <!-- ngIf: build.status == 'success' --><div ng-if="build.status == 'success'" title="18 Sep, 2017 14:54:52 - 14:57:58" class="ng-scope">
                                        <span class="ng-binding">a month ago</span> in <span elapsed-time-since="build.started" elapsed-time-to="build.finished">3 min 5 sec</span>
                                    </div><!-- end ngIf: build.status == 'success' -->
                                    <!-- ngIf: build.status == 'failed' -->
                                    <!-- ngIf: build.status == 'cancelled' -->
                                </div>
                            </div>
                        </div>
                    </div><!-- end ngRepeat: build in project.builds -->
                </div><!-- end ngIf: project.builds.length > 0 -->
            </div><!-- end ngRepeat: project in projects --><div class="project-group collapsed clearfix ng-scope" ng-repeat="project in projects">
                <div class="project-group-header success">
                    <div class="left">
                        <span class="project-name">
                            <a href="/project/vschinaiot/azure-iot-toolkit-for-mobile" class="ng-binding">
                                temperature-visualization-webapp
                                <span ng-show="project.isPrivate" class="project-moniker private ng-hide">private</span>
                            </a>
                        </span>
                        <!-- ngRepeat: tag in project.tags.split(',') --><!-- ngIf: project.tags --><!-- end ngRepeat: tag in project.tags.split(',') -->
                    </div>
                    <div class="project-toolbox right">
                        <ul>
                            <!-- ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') --><li ng-if="!project.busyId &amp;&amp; Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild')" class="ng-scope"><a ng-click="startBuild(project)" class="new-build" title="Start new build">New build</a></li><!-- end ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/azure-iot-toolkit-for-mobile/history" class="history" title="Project builds history">History</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/azure-iot-toolkit-for-mobile/deployments" class="deployments" title="Deployments">Deployments</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.nuGetFeed --><li ng-if="project.nuGetFeed" class="ng-scope"><a href="https://ci.appveyor.com/nuget/azure-iot-toolkit-for-mobile-2kf5ifqvg6hm" class="nuget" title="Project NuGet feed" target="_blank">NuGet</a></li><!-- end ngIf: project.nuGetFeed -->
                            <!-- ngIf: canUpdateProjectSettings(project) --><li ng-if="canUpdateProjectSettings(project)" class="ng-scope"><a href="/project/vschinaiot/azure-iot-toolkit-for-mobile/settings" class="settings" title="Edit project settings">Settings</a></li><!-- end ngIf: canUpdateProjectSettings(project) -->
                        </ul>
                    </div>
                </div>

                <!-- builds -->
                <!-- ngIf: project.builds.length > 0 --><div class="project-builds ng-scope" ng-if="project.builds.length > 0">
                    <!-- ngRepeat: build in project.builds --><div class="project-build project-build-status success" ng-repeat="build in project.builds">
                        <!-- pull request -->
                        <!-- ngIf: build.pullRequestId -->
                        <!-- Message and version -->
                        <div class="row">
                            <div class="medium-8 columns">
                                <div class="project-build-message"><a href="/project/vschinaiot/azure-iot-toolkit-for-mobile/build/1.0.89" class="ng-binding">update package.json</a></div>
                            </div>
                            <div class="medium-4 columns">
                                <div class="project-build-version"><a href="/project/vschinaiot/azure-iot-toolkit-for-mobile/build/1.0.89" title="Build version" class="ng-binding">1.0.89</a></div>
                            </div>
                        </div>
                        <!-- Author, branch, etc.-->
                        <div class="row">
                            <div class="medium-4 columns">
                                <div class="project-build-details ng-binding">
                                    2 months ago

                                    <!-- author/committer -->
                                    <!-- ngIf: build.authorName || build.authorUsername --><span class="author ng-scope" ng-if="build.authorName || build.authorUsername">
                                        by <!-- ngIf: build.authorUsername --><a ng-if="build.authorUsername" href="https://github.com/ChenTanyi" target="_blank" class="ng-binding ng-scope">Xin Shi</a><!-- end ngIf: build.authorUsername -->
                                        <!-- ngIf: !build.authorUsername -->

                                        <!-- committer (if different from author)-->
                                        <!-- ngIf: build.committerName && build.authorName != build.committerName --><span ng-if="build.committerName &amp;&amp; build.authorName != build.committerName" class="ng-scope">
                                            (committed by
                                            <!-- ngIf: build.committerUsername --><a ng-if="build.committerUsername" href="https://github.com/web-flow" target="_blank" class="ng-binding ng-scope">GitHub</a><!-- end ngIf: build.committerUsername --><!-- ngIf: !build.committerUsername -->)
                                        </span><!-- end ngIf: build.committerName && build.authorName != build.committerName -->
                                    </span><!-- end ngIf: build.authorName || build.authorUsername -->
                                </div>
                            </div>
                            <div class="medium-5 columns">
                                <div class="project-build-details">
                                    <!-- ngIf: build.branch --><span class="branch ng-binding ng-scope" ng-if="build.branch" title="Branch">master</span><!-- end ngIf: build.branch -->
                                    <!-- ngIf: build.tag -->
                                    <!-- ngIf: build.commitId --><a ng-if="build.commitId" href="https://github.com/VSChina/azure-iot-toolkit-for-mobile/commit/f7e53abb16188abb4d274c82c2464f93b1ff5fd7" target="_blank" class="commitid ng-binding ng-scope" title="Commit number">f7e53abb</a><!-- end ngIf: build.commitId -->
                                </div>
                            </div>
                            <div class="medium-3 columns">
                                <div class="project-build-state">
                                    <!-- ngIf: buildCanBeCancelled(project, build) -->
                                    <!-- ngIf: build.status == 'queued' -->
                                    <!-- ngIf: build.status == 'cancelling' -->
                                    <!-- ngIf: build.status == 'running' -->
                                    <!-- ngIf: build.status == 'success' --><div ng-if="build.status == 'success'" title="28 Aug, 2017 12:10:03 - 12:12:46" class="ng-scope">
                                        <span class="ng-binding">2 months ago</span> in <span elapsed-time-since="build.started" elapsed-time-to="build.finished">2 min 43 sec</span>
                                    </div><!-- end ngIf: build.status == 'success' -->
                                    <!-- ngIf: build.status == 'failed' -->
                                    <!-- ngIf: build.status == 'cancelled' -->
                                </div>
                            </div>
                        </div>
                    </div><!-- end ngRepeat: build in project.builds -->
                </div><!-- end ngIf: project.builds.length > 0 -->
            </div><!-- end ngRepeat: project in projects --><div class="project-group collapsed clearfix ng-scope" ng-repeat="project in projects">
                <div class="project-group-header success">
                    <div class="left">
                        <span class="project-name">
                            <a href="/project/vschinaiot/azure-iot-diagnostics-portal" class="ng-binding">
                                weather-forecasting-machine-learning
                                <span ng-show="project.isPrivate" class="project-moniker private ng-hide">private</span>
                            </a>
                        </span>
                        <!-- ngRepeat: tag in project.tags.split(',') --><!-- ngIf: project.tags --><!-- end ngRepeat: tag in project.tags.split(',') -->
                    </div>
                    <div class="project-toolbox right">
                        <ul>
                            <!-- ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') --><li ng-if="!project.busyId &amp;&amp; Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild')" class="ng-scope"><a ng-click="startBuild(project)" class="new-build" title="Start new build">New build</a></li><!-- end ngIf: !project.busyId && Session.hasCombinedPermission(project.securityDescriptor, 'RunBuild', 'ManageProjects', 'RunProjectBuild') -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/azure-iot-diagnostics-portal/history" class="history" title="Project builds history">History</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.builds.length > 0 --><li ng-if="project.builds.length > 0" class="ng-scope"><a href="/project/vschinaiot/azure-iot-diagnostics-portal/deployments" class="deployments" title="Deployments">Deployments</a></li><!-- end ngIf: project.builds.length > 0 -->
                            <!-- ngIf: project.nuGetFeed --><li ng-if="project.nuGetFeed" class="ng-scope"><a href="https://ci.appveyor.com/nuget/azure-iot-diagnostics-portal-ojdb243lljmg" class="nuget" title="Project NuGet feed" target="_blank">NuGet</a></li><!-- end ngIf: project.nuGetFeed -->
                            <!-- ngIf: canUpdateProjectSettings(project) --><li ng-if="canUpdateProjectSettings(project)" class="ng-scope"><a href="/project/vschinaiot/azure-iot-diagnostics-portal/settings" class="settings" title="Edit project settings">Settings</a></li><!-- end ngIf: canUpdateProjectSettings(project) -->
                        </ul>
                    </div>
                </div>

                <!-- builds -->
                <!-- ngIf: project.builds.length > 0 --><div class="project-builds ng-scope" ng-if="project.builds.length > 0">
                    <!-- ngRepeat: build in project.builds --><div class="project-build project-build-status success" ng-repeat="build in project.builds">
                        <!-- pull request -->
                        <!-- ngIf: build.pullRequestId -->
                        <!-- Message and version -->
                        <div class="row">
                            <div class="medium-8 columns">
                                <div class="project-build-message"><a href="/project/vschinaiot/azure-iot-diagnostics-portal/build/1.0.66" class="ng-binding">Adjust ML curve.</a></div>
                            </div>
                            <div class="medium-4 columns">
                                <div class="project-build-version"><a href="/project/vschinaiot/azure-iot-diagnostics-portal/build/1.0.66" title="Build version" class="ng-binding">1.0.66</a></div>
                            </div>
                        </div>
                        <!-- Author, branch, etc.-->
                        <div class="row">
                            <div class="medium-4 columns">
                                <div class="project-build-details ng-binding">
                                    3 months ago

                                    <!-- author/committer -->
                                    <!-- ngIf: build.authorName || build.authorUsername --><span class="author ng-scope" ng-if="build.authorName || build.authorUsername">
                                        by <!-- ngIf: build.authorUsername -->
                                        <!-- ngIf: !build.authorUsername --><span ng-if="!build.authorUsername" class="ng-binding ng-scope">Zhiqing Qiu</span><!-- end ngIf: !build.authorUsername -->

                                        <!-- committer (if different from author)-->
                                        <!-- ngIf: build.committerName && build.authorName != build.committerName -->
                                    </span><!-- end ngIf: build.authorName || build.authorUsername -->
                                </div>
                            </div>
                            <div class="medium-5 columns">
                                <div class="project-build-details">
                                    <!-- ngIf: build.branch --><span class="branch ng-binding ng-scope" ng-if="build.branch" title="Branch">master</span><!-- end ngIf: build.branch -->
                                    <!-- ngIf: build.tag -->
                                    <!-- ngIf: build.commitId --><a ng-if="build.commitId" href="https://github.com/VSChina/azure-iot-diagnostics-portal/commit/a200c0819dce1d06d215ec6ce46657b30a56c6dd" target="_blank" class="commitid ng-binding ng-scope" title="Commit number">a200c081</a><!-- end ngIf: build.commitId -->
                                </div>
                            </div>
                            <div class="medium-3 columns">
                                <div class="project-build-state">
                                    <!-- ngIf: buildCanBeCancelled(project, build) -->
                                    <!-- ngIf: build.status == 'queued' -->
                                    <!-- ngIf: build.status == 'cancelling' -->
                                    <!-- ngIf: build.status == 'running' -->
                                    <!-- ngIf: build.status == 'success' --><div ng-if="build.status == 'success'" title="17 Jul, 2017 16:55:06 - 16:56:29" class="ng-scope">
                                        <span class="ng-binding">3 months ago</span> in <span elapsed-time-since="build.started" elapsed-time-to="build.finished">1 min 22 sec</span>
                                    </div><!-- end ngIf: build.status == 'success' -->
                                    <!-- ngIf: build.status == 'failed' -->
                                    <!-- ngIf: build.status == 'cancelled' -->
                                </div>
                            </div>
                        </div>
                    </div><!-- end ngRepeat: build in project.builds -->
                </div><!-- end ngIf: project.builds.length > 0 -->
            </div><!-- end ngRepeat: project in projects -->

            <div class="pagination-centered ng-hide" ng-show="pages.length > 1">
                <ul class="pagination">
                    <!-- ngRepeat: page in pages --><li ng-repeat="page in pages" ng-class="{current: page.current}" class="ng-scope current">
                        <a href="/projects" class="ng-binding">1</a>
                    </li><!-- end ngRepeat: page in pages -->
                </ul>
            </div>
        </div>
    </div>
</div></div>
     
    <script src="/dist/app-5b1f9f8ba2.min.js"></script>

    
    <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
    <script src="/signalr/hubs"></script>
    <script>
        var analyticsTrackingId = "UA-32029905-2";
        var recaptchaPublicKey = "6LfsXhgUAAAAAJzEJ9ZpnKQlkkPD-kiErGOWaRol";
    </script>
    <script>
        Stripe.setPublishableKey("pk_live_ocExFvIl1PhmY5lbVMtWyZlJ");
    </script>

<iframe name="stripeXDM_default867129_provider" id="stripeXDM_default867129_provider" aria-hidden="true" src="https://js.stripe.com/v2/channel.html?stripe_xdm_e=https%3A%2F%2Fci.appveyor.com&amp;stripe_xdm_c=default867129&amp;stripe_xdm_p=1#__stripe_transport__" frameborder="0" style="position: absolute; top: -2000px; left: 0px;"></iframe><iframe src="https://js.stripe.com/v2/m/outer.html#referrer=https%3A%2F%2Fwww.appveyor.com%2F&amp;title=AppVeyor&amp;url=https%3A%2F%2Fci.appveyor.com%2F&amp;muid=2d92d65a-cf89-4d57-89a3-0b3cbc01bf31&amp;sid=30547104-e2ca-4ba2-8f86-2e119559e8e5&amp;preview=false&amp;" frameborder="0" allowtransparency="true" scrolling="no" tabindex="-1" aria-hidden="true" style="width: 1px !important; height: 1px !important; position: fixed !important; visibility: hidden !important; pointer-events: none !important;"></iframe></body>`;

var fakeOld1 = 
  {
    version: "1.0.44",
    time: "a day ago in 4 min 58 sec",
    result : "fail",
    detail : "Azure Function connect failed",
    to: "/detail/1",
  };

var fakeOld2 = 
  {
    version: "1.0.101",
    time: "17 days ago in 3 min 31 sec",
    result : "success",
    detail : "",
    
  };

var fakeNew1 = 
  {
    version: "1.0.45",
    time: "just now",
    result : "success",
    detail : "",
    to: "/detail/2",
  };
class App extends Component {
  state = {raw: rawHtmlString, detail: fakeOld1, showDetail: false}

  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
    window.mjold1 = () => {
      this.setState({
        showDetail: true,
        detail: fakeOld1,
      });
      window.mjInfo.left = fakeOld1;
    }
    window.mjold2 = () => {
      this.setState({
        showDetail: true,
        detail: fakeOld2,
      })
      window.mjInfo.left = fakeOld2;
    }
    window.mjNew1 = () => {
      this.setState({
        showDetail: true,
        detail: fakeNew1,
      })
      window.mjInfo.left = fakeNew1;
    }
  }

  add = (event) => {
            this.setState({
              raw:rawHtmlString2,
            })
  }

  render() {
    return (
      <div className="mj-container">
      <link rel="stylesheet" href="../bundle.css" />
      <div id="container" dangerouslySetInnerHTML={{__html: this.state.raw} } onDoubleClick={this.add}/>
      <div className="mj-detail pricing-table" style={{display: this.state.showDetail?"block":"none"}}>
        <li className="bullet-item">Build version: {this.state.detail.version}</li>
        <li className="bullet-item">Timestamp: {this.state.detail.time}</li>
        <li className="bullet-item">Result: {this.state.detail.result}</li>
        <li className="bullet-item">Detail: {this.state.detail.detail}</li>
        <li className="bullet-item"><Link to={this.state.detail.to} >View prototype</Link></li>
        </div>
      </div>
    );
  }
}


export default App;
