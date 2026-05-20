<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8" />
    <title>Verification Code</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A fully featured admin theme which can be used to build CRM, CMS, etc." />
    <meta name="author" content="Zoyothemes" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ asset('public/backend') }}/assets/images/favicon.ico">

    <!-- App css -->
    <link href="{{ asset('public/backend') }}/assets/css/app.min.css" rel="stylesheet" type="text/css" id="app-style" />

    <!-- Icons -->
    <link href="{{ asset('public/backend') }}/assets/css/icons.min.css" rel="stylesheet" type="text/css" />

</head>

<body class="bg-white">
    <!-- Begin page -->
    <div class="account-page">
        <div class="p-0 container-fluid">
            <div class="row align-items-center g-0">
                <div class="col-xl-5">
                    <div class="row">
                        <div class="mx-auto col-md-7">
                            <div class="p-4 mb-0 border-0 p-md-5 p-lg-0">

                                <div class="p-0 mb-4">
                                    <a href="#" class="auth-logo">
                                        <h3>Verification Code</h3>
                                        {{-- <img src="{{ asset('public/backend') }}/assets/images/logo-dark.png"
                                            alt="logo-dark" class="mx-auto" height="28" /> --}}
                                    </a>
                                </div>

                                <div class="pt-0">

                                    @if (session('status'))
                                        <div class="alert alert-success">
                                            {{ session('status') }}
                                        </div>
                                    @endif

                                    @if($errors->any())
                                        <div class="mt-3 alert alert-danger">
                                            <ul>
                                                @foreach($errors->all() as $error)
                                                <li>{{ $error }}</li>
                                                @endforeach
                                            </ul>
                                        </div>
                                    @endif

                                    <form method="POST" action="{{ route('custom.verification.verify') }}" class="my-4">
                                        @csrf

                                        <div class="mb-3 form-group">
                                            <label for="code" class="form-label">Verification Code</label>
                                            <input class="form-control @error('code') is-invalid @enderror"
                                                type="text" name="code" id="code" required=""
                                                placeholder="Enter your code">
                                            @error('code')
                                                <div class="invalid-feedback">
                                                    <strong>{{ $message }}</strong>
                                                </div>
                                            @enderror
                                        </div>
                                        <div class="mb-0 form-group row">
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button type="submit" class="btn btn-primary" type="submit">
                                                        Verify </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-7">
                    <div class="p-4 account-page-bg p-md-5">
                        <div class="text-center">
                            <div class="auth-image">
                                <img src="{{ asset('public/backend') }}/assets/images/authentication.svg"
                                    class="mx-auto img-fluid" alt="images">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- END wrapper -->

    <!-- Vendor -->
    <script src="{{ asset('public/backend') }}/assets/libs/jquery/jquery.min.js"></script>
    <script src="{{ asset('public/backend') }}/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('public/backend') }}/assets/libs/simplebar/simplebar.min.js"></script>
    <script src="{{ asset('public/backend') }}/assets/libs/node-waves/waves.min.js"></script>
    <script src="{{ asset('public/backend') }}/assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
    <script src="{{ asset('public/backend') }}/assets/libs/jquery.counterup/jquery.counterup.min.js"></script>
    <script src="{{ asset('public/backend') }}/assets/libs/feather-icons/feather.min.js"></script>

    <!-- App js-->
    <script src="{{ asset('public/backend') }}/assets/js/app.js"></script>

</body>

</html>
