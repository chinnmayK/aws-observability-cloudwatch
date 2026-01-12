# Smart Order Log Processor

A background order processing system designed to demonstrate
advanced AWS CloudWatch logging and monitoring capabilities.

## What this project does
- Simulates continuous order processing
- Generates structured JSON logs
- Produces success, failure, delay, and duplicate events
- Designed for log analysis, not APIs

## Log Events
- ORDER_SUCCESS
- PAYMENT_FAILED
- PROCESSING_DELAY
- DUPLICATE_ORDER

## Sample Log
```json
{
  "timestamp": "2026-01-12T06:01:13.015Z",
  "orderId": "ORD-1bbd0c",
  "customerId": "CUST-7",
  "event": "PROCESSING_DELAY",
  "amount": 4726,
  "processingTimeMs": 3009
}
