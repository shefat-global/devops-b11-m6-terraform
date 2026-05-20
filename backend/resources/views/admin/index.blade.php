@extends('admin.master')
@section('admin')


<div class="content">

    <!-- Start Content-->
    <div class="container-xxl">

        <div class="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
            <div class="flex-grow-1">
                <h4 class="m-0 fs-18 fw-semibold">Dashboard</h4>
            </div>
        </div>

        <!-- start row -->
        <div class="row">
            <div class="col-md-12 col-xl-12">
                <div class="row g-3">

                    <div class="col-md-6 col-xl-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="mb-1 fs-14">Website Traffic</div>
                                </div>

                                <div class="mb-2 d-flex align-items-baseline">
                                    <div class="mb-0 text-black fs-22 me-2 fw-semibold">91.6K</div>
                                    <div class="me-auto">
                                        <span class="text-primary d-inline-flex align-items-center">
                                            15%
                                            <i data-feather="trending-up" class="ms-1"
                                                style="height: 22px; width: 22px;"></i>
                                        </span>
                                    </div>
                                </div>
                                <div id="website-visitors" class="apex-charts"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xl-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="mb-1 fs-14">Conversion rate</div>
                                </div>

                                <div class="mb-2 d-flex align-items-baseline">
                                    <div class="mb-0 text-black fs-22 me-2 fw-semibold">15%</div>
                                    <div class="me-auto">
                                        <span class="text-danger d-inline-flex align-items-center">
                                            10%
                                            <i data-feather="trending-down" class="ms-1"
                                                style="height: 22px; width: 22px;"></i>
                                        </span>
                                    </div>
                                </div>
                                <div id="conversion-visitors" class="apex-charts"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xl-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="mb-1 fs-14">Session duration</div>
                                </div>

                                <div class="mb-2 d-flex align-items-baseline">
                                    <div class="mb-0 text-black fs-22 me-2 fw-semibold">90 Sec</div>
                                    <div class="me-auto">
                                        <span class="text-success d-inline-flex align-items-center">
                                            25%
                                            <i data-feather="trending-up" class="ms-1"
                                                style="height: 22px; width: 22px;"></i>
                                        </span>
                                    </div>
                                </div>
                                <div id="session-visitors" class="apex-charts"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xl-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="mb-1 fs-14">Active Users</div>
                                </div>

                                <div class="mb-2 d-flex align-items-baseline">
                                    <div class="mb-0 text-black fs-22 me-2 fw-semibold">2,986</div>
                                    <div class="me-auto">
                                        <span class="text-success d-inline-flex align-items-center">
                                            4%
                                            <i data-feather="trending-up" class="ms-1"
                                                style="height: 22px; width: 22px;"></i>
                                        </span>
                                    </div>
                                </div>
                                <div id="active-users" class="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end sales -->
        </div> <!-- end row -->




    </div> <!-- container-fluid -->
</div> <!-- content -->


@endsection
