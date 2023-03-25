import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Theory.module.css'

const Theory = () => {
  return (
    <div>
        <h2 className={styles.headingText}>Model Risk Evaluation</h2> <br></br>

        Model risk occurs primarily for two reasons:

        <ul className={styles.listText}>
            <li>A model may have fundamental errors and produce inaccurate outputs
when viewed against its design objective and intended business uses</li>
            <li>
            A model may be used incorrectly or inappropriately or there may be a
misunderstanding about its limitations and assumptions. Model risk
increases with greater model complexity, higher uncertainty about inputs
and assumptions, broader extent of use, and larger potential impact.
            </li>
        </ul>
        <br></br><br></br>
        <h2 className={styles.headingText}>Overview</h2> <br></br>

        The Credit Line Decrease (CLD) model is used to identify high risks accounts with
the objective to mitigate potential losses by decreasing their credit limit. The
model will be used on all the RRB credit card customers.
RRB branded credit card is a core product of RRB and accounts for ~$90 million
ANR with ~20 million open accounts till Dec’22.
The model has been built using Dec 2018 development vintage. February 2018
and April 2019 has been used for out-of-time (OOT) validations. The model has
been built on entire card customers except for the customers whose past 12
months historical data is not known.
The model estimates the likelihood of an account having a status of 60+ days
past due at the end of 18 months (classified as ‘bad’ hereafter in this document).
The model has been built on both internal as well as external data. The external
credit bureau data is received monthly through a batch process for the Existing
Card Members (ECM). In addition, the model leverages daily data – daily
bureau (in addition to batch bureau), daily triggers and a few daily on-us
attributes – to allow the identification of high risk accounts before they utilize the
remaining open-to-buy amount.

<br></br><br></br>
    <h2 className={styles.headingText}>Model Overview</h2>

    The CLD model is developed as an account level score and scores all the ECM
consumer accounts. It is developed using on-us ECM information (daily and
cycle-end), batch bureau (monthly) and Bureau trigger (daily) information. The
use of daily data in the model development allows the score to adjust according
to the changes observed at a daily level and hence capturing the accounts
with an early sign of financial distress.

The model development went through four major stages:

<ul className={styles.listText}>
    <li>Vintage Selection and Performance Definition</li>
    <li>Data Preparation</li>
    <li>Model Development and Validation</li>
    <li>Documentation</li>
</ul>

    <h2 className={styles.headingText}>Vintage Selection</h2> <br></br>

    The choice of vintages used for model development is governed by the
    following key factors:

    <ul className={styles.listText}>
        <li><b>Data availability: </b>The model makes use of daily CLD extracts as
development base, which is available as archives and is retained for 24
months. Further, the model uses daily bureau attributes.</li>
<li><b>Recency: </b>Choosing a recent vintage to incorporate recent patterns
related to credit risk behavior. Also, recency in vintage ensures better
representation of portfolio performance.</li>
<li><b>Forward Looking: </b>Vintages selected are representative of the forward
looking state of the portfolio. This has been demonstrated with a
validation on most recent vintage of April 2019.</li>
    </ul>

    The final vintages used for the Model development and validations are:

    <ul className={styles.listText}>
        <li>Development: Dec' 2018</li>
        <li>Back Testing: Feb' 2018</li>
        <li>Validation: Apr' 2019</li>
        <li>Early Warnings: Dec' 2019</li>
    </ul>

    <br></br><br></br>
    <h2 className={styles.headingText}>Performance Definition</h2><br></br>

    The model uses performance definition of ‘Bucket 3+ at the end of 18 months’.
This definition has been obtained on the basis of a business analysis conducted
with a terminal window of 24 months. A greater emphasis has been made on
keeping the false positive rate lower given that Credit Line Decrease is a
negative action to a customer. The business analysis is also supported by
statistical analysis on the choice of target variable definition. In addition,
forbearance, re-age and settlements in 18 months has been classified as bads.
To minimize overlap between Good/Bad characteristics, ‘indeterminate has
been assigned in the model development. Accounts with Bucket 2 at the end of
performance window has been tagged as ‘indeterminate’ as accounts have
higher false positive rate (~50%), but belongs to a negative segment.

<br></br><br></br>
<h2 className={styles.headingText}>Data Preparation</h2>
<br></br>
<h3>Dataset Creation</h3> <br></br>
The model has been developed using the extracts from the Card Master File
(CMF). Given that the development of the model was priority based for the
business based on the impact analysis of quick model developed earlier, a
limited set of features were used from a previous model (APD model). This was
done to facilitate quick development and implementation to suit business needs.
Given that the APD model uses attributes from varied behavior dimensions, all
the dimensions were captured for this model as well. The model also uses on-us
data along with the bureau data. This data was used to create trended derived
variables and was used in model development. Daily on-us variables and daily
bureau trigger were also used to capture daily variations in the customer
characteristics.
The common variables include delinquency status, days since last delinquent,
months on book, closing balances, recent behavior of accounts, available
credit, auto pay enabled, payment method, card type etc.

<br></br><br></br>
<h3>Data Quality Check</h3> <br></br>

Checks were created at different stages of the model dataset creation in order
to ensure the integrity in the final model development as well as model
validation datasets. A few of the checks undertaken are described below:

<ul className={styles.listText}>
    <li> <b>Check for Volume Consistency</b>Number of observations pulled for every
vintage was cross-checked for consistency at every stage of the data
pull process before merging and after roll-up. At each stage of data pull,
the number of accounts were reconfirmed to ensure and investigate the
reason of drop in the number of accounts, if any</li>

<li><b>Univariate Distribution</b>Variable distribution of all samples have been
checked. Each variables percentile information, count of missing,
minimum, maximum and standard deviation were checked. Key

7
variables were examined to check if the distribution conformed to the
business understanding.</li>
<li><b>Check for high missing percentage of attributes:</b>This was done across
samples spanning time periods to ensure availability and stability of data
in model development and validation. For numerical variables, the
missing values were imputed by mean whereas missing values in
categorical columns were imputed by mode.</li>
<li><b>Duplicate Check for Primary Keys</b>Checks were applied on dataset
primary key in order to ensure there were no duplication.</li>
</ul>

<h3>Derived Variables</h3> <br></br>
A large number of trended variables for model development. Ratio based
features were created to capture the incremental behavior of accounts from
the historical data. Basic statistical features like mean, max, min, standard
deviation of some amount based variables were created.

<br></br><br></br>
<h2 className={styles.headingText}>Model Specifications</h2>

<br></br><br></br>
<h3>Model Objective</h3>
The objective of the CLD model is to predict the probability of default of an
account in next 18 months. These score will be used to identify high risk accounts
within the eligible population to allow the bank to decrease the credit limit of the
customers before they use up their remaining credit line and become delinquent

8
and eventually charge-off. Conventionally, CLD program has been leveraging
portfolio level behavior risk score, FICO score along with a set of rule based
criteria to identify high risk customers. However, machine learning technique
captures non-linear complex relationships more effectively as compared to
simple linear techniques like logistic regression. The score is computed at an
account level and developed using XGBoost (Extreme Gradient Boosting)
technique leveraging all the different type of data.
The model output will be used by the policy team along with other rules to
screen the high risk customers to decrease their credit limits to the current
balances.

<br></br><br></br>
<h3>Model Methodology</h3>

XGBoost and Logistic Regression are two techniques used for creating the model
along with GBM trees. The final model is built using XGBoost and this is
determined based on the performance benefits observed in using XGBoost. It is
observed that XGBoost outperforms both the other models on all the important
business metrics and does so consistently across a wide range of data points.
Extreme Gradient Boosting Machines (XGBoost) has been used for model
development. XGBoost is a widely used technique for both Classification and
Regression outcomes. It is a stage-wise additive modelling technique, which
improves upon predictions by building decision trees on residuals remaining at
any stage. For a classification outcome, XGBoost is built based on a Bernoulli
distribution and optimizes for a log loss function. The residuals in a classification
problem are defined by gradients of the log loss function. At each stage,
XGBoost uses decision trees to predict the remaining residuals. An extensive
hyper-parameter tuning was performed in a Grid search pattern to obtain the
optimal set of parameters.
It should be noted that the model does not make use of segmentation since
XGBoost is an ensemble of decision trees itself and thus is capable of finding
interactions without the explicit use of segmentation.
XGBoost technique allows for multiple hyper-parameters to control and fine-tune
the growth of a XGBoost model. An extensive grid search was performen on key
hyper-parameters and the performance was analyzed. The hyper-parameters
used in tuning process were:

<ul className={styles.listText}>
    <li>Number of trees</li>
    <li>Depth of a tree</li>
    <li>Learning Rate (Shrinkage)</li>
    <li>Regularization Parameters</li>
    <li>Minimum number of observations</li>
    <li>Subsample and Column Sample</li>
</ul>


<br></br><br></br>
<h3>Model Performance</h3>

The model Risk Score shows incremental model performance compared to other
benchmarks. While there is no direct benchmark available for the CLD model
since it’s a bespoke score, it is still compared to the other scores, since they are
being used in the current CLD policy.
Below charts provide the overall performance comparison of CLD model with
other benchmarks. (‘Current’ here refers to the current XGBoost model)
    </div>
  )
}

export default Theory